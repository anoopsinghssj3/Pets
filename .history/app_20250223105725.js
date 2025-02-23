const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const pets=  require("./src/Component/Pets/PetsCard/PetsCard.jsx");

main()
.then((res)=> console.log("connection successful............."))
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/shop", (req, res) => {
    res.render("pets.ejs");
})

app.listen(3000, () => {
    console.log("server running port: 3000");
})