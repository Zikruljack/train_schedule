//import module
const { stations } = require("../models");
class StationController {
  static async listAllStation(req, res) {
    try {
      const dataStation = await stations.findAll();
      // res.json(dataStation);
      res.render(
        "mainView/station.ejs",
        { results: dataStation },
        { async: true }
      );
    } catch (e) {
      res.json({ error: e.message });
    }
  }

  static async addNewStation(req, res) {
    try {
      // const { name, location } = req.body;
      const results = await stations.create(req.body);
      res.redirect("/station");
      // res.json(results);
    } catch (e) {
      res.json({ error: e.message });
    }
  }

  static async deleteStation(req, res) {
    try {
      const id = +req.params.id;

      let result = await stations.destroy({
        where: { id },
      });

      // res.json(resultDriver);
      res.redirect("/stations");
    } catch (err) {
      res.json(err);
    }
  }

  static async updateStation(req, res) {
    try {
      const id = req.params.id;
      const { name, location } = req.body;
      const results = await stations.update(name, location, { where: { id } });
      res.redirect("/stations");
    } catch (e) {
      res.json(e);
    }
  }
}

module.exports = StationController;
