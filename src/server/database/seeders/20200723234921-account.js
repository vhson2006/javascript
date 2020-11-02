const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

module.exports = {
  up: async (queryInterface) => {
    const obj = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/account.json'), 'utf8'));
    const data = Object.keys(obj).map((key) => {
      obj[key].password = crypto.createHash('md5').update(obj[key].password).digest('hex');
      return obj[key];
    });

    await queryInterface.bulkInsert('accounts', data, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('accounts', null, {});
  },
};
