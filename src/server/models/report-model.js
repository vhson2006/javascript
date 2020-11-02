import { Model } from 'sequelize';

const func = (sequelize, DataTypes) => {
  class report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  report.init({
    accountId: DataTypes.UUID,
    type: DataTypes.STRING,
    value: DataTypes.STRING,
    lateArrival: DataTypes.INTEGER,
    onTimeArrival: DataTypes.INTEGER,
    earlyLeave: DataTypes.INTEGER,
    onTimeLeave: DataTypes.INTEGER,
    lateAndEarly: DataTypes.INTEGER,
    notAttendance: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'report',
  });
  return report;
};

export default func;
