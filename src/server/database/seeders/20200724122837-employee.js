const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const updateAccountId = async (obj, key) => {
      const query = 'SELECT id FROM "public"."accounts" WHERE "email"=\'%s\' LIMIT 1';
      const account = await queryInterface.sequelize.query(
        query.replace('%s', obj[key].accountId),
      );
      obj[key].password = crypto.createHash('md5').update(obj[key].password).digest('hex');
      obj[key].accountId = account[0][0].id;

      return obj[key];
    };

    const getData = async () => {
      const obj = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/employee.json'), 'utf8'));
      return Promise.all(Object.keys(obj).map((key) => updateAccountId(obj, key)));
    };

    const data = await getData();
    await queryInterface.bulkInsert('employees', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('employees', null, {});
  },
};
