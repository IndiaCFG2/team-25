require("dotenv").config();

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

const userService = require("./user-service");

app.get("/signup", (req, res) => {
  res.render("register");
});

app.post("/signuptry", async (req, res) => {
  let schoolId = req.body.schoolId;
  let password1 = req.body.password1;
  let password2 = req.body.password2;
  try {
    if (password1 == password2) {
      const user = await userService.addUser(schoolId, password1);
      //console.log(res.status());
      //res.status(201).json(user);
      res.render("login");
    } else {
      //console.log(res.status());
      res.status(401).json({ error: err.message });
    }
  } catch (err) {
    // console.log(res.status());
    res.status(401).json({ error: err.message });
  }
});

app.get("/signin", (req, res) => {
  res.render("login");
});

app.post("/signintry", async (req, res) => {
  const { schoolId, password } = req.body;
  try {
    const user = await userService.authenticate(schoolId, password);
    res.render("main");
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.get("/", (req, res) => {
  res.render("login");
});

// router.get("/", (req, res) => {
//   res.render("index");
// });

// app.post("/boards", (req, res) => {
//   let boardName = req.body.boardName;
//   let grade = req.body.grade;
//   let subject = req.body.subject;
//   let week = req.body.week;
//   let lesson = req.body.lesson;
//   let url = req.body.url;

//   db.collection(boardName)
//     .doc(grade)
//     .collection(subject)
//     .doc(week)
//     .collection(lesson)
//     .add({ link: url })
//     .then(() => {
//       console.log("Data added");
//     });
// });

// get link - (www.google.com - VNR) <-> www.shortvnr.com
// db.collection('count').doc('cbse').collection('url').add({clicks: 0})

app.listen(3500, () => {
  console.log("Board Server started running on port no 3500");
});
