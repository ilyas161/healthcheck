const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const randomRoute = require("./routs/random");
const healthcheckRoute = require("./routs/healthcheck");
const logger = require("./logger/logger");

app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(randomRoute);
app.use(healthcheckRoute);

app.get("/", (req, res) => {
  res.render("home");
});

const Port = process.env.port;

app.listen(Port, () => {
  logger.info(`server started on port ${Port}`)
});
