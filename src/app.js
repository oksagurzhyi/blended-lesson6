const express = require("express");
const router = require("./routes/tasks");
const app = express();

app.use(express.json());

app.use("/tasks", router);

module.exports = app;
