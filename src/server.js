const express = require("express");

const app = express();

app.disable("x-powered-by");

app.use("/ping", (req, res) => res.send("pong"));

app.use((req, res) => {
  res.status(404).send("Sorry traveler, you seem to have lost your way.");
});

module.exports = app;
