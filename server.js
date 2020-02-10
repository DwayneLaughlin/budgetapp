const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 8080;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes here
app.get("/", function(req,res){
  console.log("get works");
  res.render('index');
  });

  


app.put("/api/transactions/", function (req,res){
  console.log ("post works")
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});