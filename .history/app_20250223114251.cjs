const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    // res.send("this is home page");
    res.render("/Component/Pets/Pets.jsx")
})

app.listen(5000, () => {
console.log("server running port: 5000");
})