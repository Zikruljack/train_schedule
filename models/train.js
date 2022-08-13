"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class train extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      train.belongsTo(models.schedule, { foreignKey: "schedule_id" });
      train.belongsTo(models.route, { foreignKey: "route_id" });
    }
  }
  train.init(
    {
      name: DataTypes.STRING,
      schedule_id: DataTypes.INTEGER,
      route_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "train",
    }
  );
  return train;
};
