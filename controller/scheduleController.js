// import model
const { schedule } = require("../models");
class ScheduleController {
  static async listAllSchedule(req, res) {
    try {
      const dataSchedule = await schedule.findAll();
      // res.json(dataSchedule);
      res.render("mainView/schedule.ejs", { results: dataSchedule });
    } catch (e) {
      res.json({ error: e.message });
    }
  }

  static async addSchedulePage(req, res) {
    try {
      const dataSchedule = await schedule.findAll();
      // res.json(dataSchedule);
      res.render("addView/schedule.ejs", { results: dataSchedule });
    } catch (err) {
      res.json(err);
    }
  }

  static async updateSchedulePage(req, res) {
    try {
      const dataSchedule = await schedule.findAll();
      // res.json(dataSchedule);
      res.render("editView/schedule.ejs", { results: dataSchedule });
    } catch (err) {
      res.json(err);
    }
  }

  static async addNewSchedule(req, res) {
    try {
      // const { timeDate } = req.body;
      const results = await schedule.create(req.body);
      res.redirect("/schedule");
      // res.json(results);
    } catch (e) {
      res.json({ error: e.message });
    }
  }
  static async listAllSchedule(req, res) {
    try {
      const dataSchedule = await schedule.findAll();
      // res.json(dataSchedule);
      res.render("mainView/schedule.ejs", { results: dataSchedule });
    } catch (e) {
      res.json({ error: e.message });
    }
  }

  static async deleteSchedule(req, res) {
    try {
      const id = +req.params.id;

      let result = await schedule.destroy({
        where: { id },
      });
      res.redirect("/schedule");
    } catch (err) {
      res.json(err);
    }
  }

  static async updateSchedule(req, res) {
    try {
      const id = req.params.id;
      const { timeDate } = req.body;
      const results = await schedule.update(timeDate, { where: { id } });
      res.redirect("/schedule");
    } catch (e) {
      res.json(e);
    }
  }
}

module.exports = ScheduleController;
