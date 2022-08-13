const route = require("express").Router();
const StationController = require("../controller/stationController");

route.get("/", StationController.listAllStation);
route.post("/create", StationController.addNewStation);
route.get("/delete/:id", StationController.deleteStation);
route.post("/update/:id", StationController.updateStation);

module.exports = route;
