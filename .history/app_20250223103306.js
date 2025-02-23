const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("this is home page of pets");
})


app.listen(3000, () => {
    console.log("server running port: 3000");
})