import { Model } from 'sequelize';

const func = (sequelize, DataTypes) => {
  class timekeeping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  timekeeping.init({
    accountId: DataTypes.UUID,
    employeeId: DataTypes.UUID,
    currentDate: DataTypes.DATEONLY,
    checkIn: DataTypes.DATE,
    checkOut: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'timekeeping',
  });
  return timekeeping;
};

export default func;
