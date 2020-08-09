// const links = require('./data/data1.js');

const express = require("express");
const fetch = require("node-fetch");

let settings = { method: "Get" };

const app = express();
app.use(express.json({ extended: false }));

var port = process.env.PORT || 5000;

// app.get("/", function (req, res) {
//   res.send("Welcome to Our 321 Links API");
// });

app.get("/api/:boardname/:grade/:subject/:week/:lesson", function (req, res) {
  //localhost:5000/grade/subject/week/lesson/schoolname
  console.log(req.url);
  //   console.log(req.url.split("/"));
  const url = req.url;
  let newUrl = "https://jpmc-c1ba1.firebaseio.com/" + url.substr(5) + ".json";
  //   console.log(o bj);

  fetch(newUrl, settings)
    .then((res) => res.json())
    .then((json) => {
      // do something with JSON
      console.log(json.url);
      res.redirect(json.url);
    });
});

app.listen(port, function () {
  console.log("this app is listening on port 3000!");
});
