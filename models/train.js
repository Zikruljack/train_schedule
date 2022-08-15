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
      train.hasMany(models.stations, { foreignKey: "stationId" });
      train.belongsToMany(models.schedules, { through: models.route });
    }
  }
  train.init(
    {
      name: DataTypes.STRING,
      class: DataTypes.STRING,
      stationId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "train",
    }
  );
  return train;
};
