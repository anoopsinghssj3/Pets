const express = require("express");
const app = express();
const path = require("path");

app.use("view engine", "ejs");
app.use("views", path.join(__dirname, "views"));