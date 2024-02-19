const express = require("express");
require("./db/config");
const User = require("./db/user");

const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/sign-up", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject()
  delete result.password
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "no user found" });
  }
});

app.listen(3000);