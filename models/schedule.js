"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      schedule.belongsToMany(models.train, {
        through: models.route,
      });
    }
  }
  schedule.init(
    {
      timeArrive: DataTypes.DATE,
      timeDeparture: DataTypes.DATE,
      trainId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "schedule",
    }
  );
  return schedule;
};
