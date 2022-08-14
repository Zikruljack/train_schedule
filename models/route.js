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
      route.belongsTo(models.train);
      route.belongsTo(models.schedule);
    }
  }
  route.init(
    {
      trainId: DataTypes.INTEGER,
      scheduleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "route",
    }
  );
  return route;
};
