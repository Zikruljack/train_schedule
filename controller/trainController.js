// import model
const { train, schedule, station, routes } = require("../models");
class TrainController {
  static async listAllTrain(req, res) {
    try {
      const dataTrain = await train.findAll();
      // res.json(dataTrain);
      res.render("mainView/train.ejs", { results: dataTrain });
    } catch (err) {
      res.json(err);
    }
  }

  static async addTrainPage(req, res) {
    try {
      const dataTrain = await train.findAll();
      // res.json(dataTrain);
      res.render("addView/train.ejs", { results: dataTrain });
    } catch (err) {
      res.json(err);
    }
  }
  static async updateTrainPage(req, res) {
    try {
      const dataTrain = await train.findAll();
      // res.json(dataTrain);
      res.render("editView/train.ejs", { results: dataTrain });
    } catch (err) {
      res.json(err);
    }
  }

  static async addNewTrain(req, res) {
    try {
      const data = await train.create(req.body);
      // res.json(data);
      res.redirect("/trains");
    } catch (e) {
      res.json(e);
    }
  }

  static async deleteTrain(req, res) {
    try {
      const id = +req.params.id;

      let resultTrain = await train.destroy({
        where: { id },
      });

      res.redirect("/trains");
    } catch (err) {
      res.json(err);
    }
  }

  static async updateTrainInfo(req, res) {
    try {
      const id = req.params.id;
      const {
        name,
        staion_id,
        timeArriveTrain,
        timeDepartureTrain,
        stationFrom,
        stationTo,
      } = req.body;
      const results = await train.update(
        name,
        staion_id,
        timeArriveTrain,
        timeDepartureTrain,
        stationFrom,
        stationTo,
        { where: { id } }
      );
      res.redirect("/trains");
    } catch (e) {
      res.json(e);
    }
  }
}

module.exports = TrainController;
