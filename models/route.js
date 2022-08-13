"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      route.hasOne(models.train);
      route.hasOne(models.stations, {
        foreignKey: "station_to",
        foreignKey: "station_from",
      });
      route.hasOne(models.schedule, {
        foreignKey: "scheduleArrive",
        foreignKey: "scheduleDeparture",
      });
    }
  }
  route.init(
    {
      station_to: DataTypes.INTEGER,
      staion_from: DataTypes.INTEGER,
      scheduleArrive: DataTypes.DATE,
      scheduleDeparture: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "route",
    }
  );
  return route;
};
