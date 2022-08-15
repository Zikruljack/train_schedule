const route = require("express").Router();
const TrainController = require("../controller/trainController");

route.get("/", TrainController.listAllTrain);
route.post("/create", TrainController.addNewTrain);
route.get("/create", TrainController.addTrainPage);
route.get("/delete/:id", TrainController.deleteTrain);
route.get("/update/:id", TrainController.updateTrainPage);
route.post("/update/:id", TrainController.updateTrainInfo);

module.exports = route;
