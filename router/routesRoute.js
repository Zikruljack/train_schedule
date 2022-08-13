const route = require("express").Router();
const RouteController = require("../controller/routeController");

route.get("/", RouteController.listAllRoute);
route.post("/create", RouteController.addNewRoute);
route.get("/delete/:id", RouteController.deleteRoute);
route.post("/update/:id", RouteController.updateRoute);

module.exports = route;
