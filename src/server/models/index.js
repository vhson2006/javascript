import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
import account from './account-model';
import employee from './employee-model';
import timekeeping from './timekeeping-model';
import report from './report-model';

if (process.env.TYPE === 'development') {
  dotenv.config({ path: path.join(__dirname, '../../../.env/server.development.env') });
} else {
  dotenv.config({ path: path.join(__dirname, '../.env/server.build.env') });
}

const models = {};
export const model = ((force = false) => {
  if (Object.keys(models).length && !force) {
    return models;
  }
  const config = {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DB,
    options: {
      host: process.env.POSTGRES_HOST,
      dialect: 'postgres',
    },
  };

  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config.options,
  );

  const modules = [
    account,
    employee,
    timekeeping,
    report,
  ];

  // Initialize models
  modules.forEach((module) => {
    const child = module(sequelize, Sequelize, config);
    models[child.name] = child;
  });

  // Apply associations
  Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });

  models.sequelize = sequelize;
  models.Sequelize = Sequelize;

  return models;
})();
