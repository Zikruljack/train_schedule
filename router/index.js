const routes = require("express").Router();
const trainRoute = require("./trainRoute");
const stationRoute = require("./stationRoute");
const routesRoute = require("./routesRoute");
const scheduleRoute = require("./scheduleRoute");

routes.get("/", (req, res) => {
  res.render("index.ejs");
  // res.json("Application Train Schedule ");
});

routes.use("/trains", trainRoute);
routes.use("/stations", stationRoute);
routes.use("/routes", routesRoute);
routes.use("/schedule", scheduleRoute);

module.exports = routes;
