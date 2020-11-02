import { Model } from 'sequelize';

const func = (sequelize, DataTypes) => {
  class account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }

    static get initial() {
      return 'initial';
    }

    static get active() {
      return 'active';
    }

    static get deactive() {
      return 'deactive';
    }
  }
  account.init({
    googleId: DataTypes.STRING,
    facebookId: DataTypes.STRING,
    twitterId: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    status: DataTypes.STRING,
    checkIn: DataTypes.TIME,
    checkOut: DataTypes.TIME,
    ipAddress: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    fixDevice: DataTypes.STRING,
    joinDate: DataTypes.DATE,
    dueDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'account',
  });
  return account;
};

export default func;
