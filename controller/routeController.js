// import model
const { route } = require("../models");

class RouteController {
  static async listAllRoute(req, res) {
    try {
      const dataRoute = await route.findAll();
      res.json(dataRoute);
      // res.render("/routes.ejs", { results: dataRoute });
    } catch (e) {
      res.json({ error: e.message });
    }
  }

  static async addNewRoute(req, res) {
    try {
      const { station_to, staion_from, scheduleArrive, scheduleDeparture } =
        req.body;
      const results = await route.create({
        station_to,
        staion_from,
        scheduleArrive,
        scheduleDeparture,
      });
      // res.redirect("/routes");
      res.json(results);
    } catch (e) {
      res.json({ error: e.message });
    }
  }

  static async deleteRoute(req, res) {
    try {
      const id = +req.params.id;

      let result = await route.destroy({
        where: { id },
      });

      // res.json(resultDriver);
      res.redirect("/routes");
    } catch (err) {
      res.json(err);
    }
  }

  static async updateRoute(req, res) {
    try {
      const id = req.params.id;
      const { staton_id } = req.body;
      const results = await routes.update(staton_id, { where: { id } });
      res.redirect("/routes");
    } catch (e) {
      res.json(e);
    }
  }
}

module.exports = RouteController;
