const moment = require('moment');
const fs = require('fs');
const path = require('path');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const getAccountId = async (accountEmail) => {
      const query = 'SELECT id FROM "public"."accounts" WHERE "email"=\'%s\' LIMIT 1';
      const account = await queryInterface.sequelize.query(
        query.replace('%s', accountEmail),
      );

      return account[0][0].id;
    };

    const getEmployeeId = async (employeeEmail) => {
      const query = 'SELECT id FROM "public"."employees" WHERE "email"=\'%s\' LIMIT 1';
      const employee = await queryInterface.sequelize.query(
        query.replace('%s', employeeEmail),
      );

      return employee[0][0].id;
    };

    const generateCheckInTime = (date, time) => moment(`${date.format('YYYY-MM-DD')} ${time}`).format('YYYY-MM-DD HH:mm:ss');

    const createTimekeeping = async (employees, key) => {
      const timekeepings = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/timekeeping.json'), 'utf8'));
      const account = await getAccountId(timekeepings.accountId);
      const employee = await getEmployeeId(employees[key].email);

      const result = [];
      const startDate = moment(timekeepings.startDate);
      const endDate = moment(timekeepings.endDate);
      for (let d = startDate; d <= endDate; d.add(1, 'day')) {
        result.push({
          accountId: account,
          employeeId: employee,
          currentDate: d.format('YYYY-MM-DD'),
          checkIn: generateCheckInTime(
            d,
            timekeepings.checkIn[Math.floor(Math.random() * timekeepings.checkIn.length)],
          ),
          checkOut: generateCheckInTime(
            d,
            timekeepings.checkOut[Math.floor(Math.random() * timekeepings.checkOut.length)],
          ),
        });
      }

      return result;
    };

    const getData = async () => {
      const employees = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/employee.json'), 'utf8'));
      return Promise.all(Object.keys(employees).map((key) => createTimekeeping(employees, key)));
    };

    const data = await getData();
    await queryInterface.bulkInsert('timekeepings', [].concat.apply([], data), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('timekeepings', null, {});
  },
};
