const route = require("express").Router();
const ScheduleController = require("../controller/scheduleController");

route.get("/", ScheduleController.listAllSchedule);
route.post("/create", ScheduleController.addNewSchedule);
route.get("/delete/:id", ScheduleController.deleteSchedule);
route.post("/update/:id", ScheduleController.updateSchedule);
module.exports = route;
