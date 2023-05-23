require("dotenv").config();
const User = require("./config");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors());
// let currentUser;
app.get("/", async (req, res) => {
  const snapShot = await User.get();
  const list_users = snapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  res.send(list_users);
});

app.get("/LogIn", authenticateToken, (req, res) => {});

app.post("/create", async (req, res) => {
  let data = req.body;
  console.log(data);
  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
  data = { data: data, accessToken: accessToken };
  await User.add(data);
  res.send(accessToken);
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    res.send(user);
    next();
  });
}

app.listen(port, () => console.log("Server is listening on port " + port));
