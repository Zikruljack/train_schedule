const express = require("express");
const routes = require("./router/index");

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
  console.log("Server running on port " + port);
});
