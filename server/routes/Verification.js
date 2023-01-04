const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../models/User");
router.post('/verify',(req,res)=>{
  const v = jwt.verify(req.body.token,'secretKey');
  console.log(v);
  return res.send({password:v});
})
router.post("/signUp", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save((err, newUser) => {
    if (err) {
      console.log("Error while creating a user !!" + req.body.name);
      console.log(err.message);
      return;
    } else {
      let payload = { subject: newUser._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({'token':token,'id':user._id});
    }
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(401).send({ message: "Invalid credential in Email : Does Not Exist ." });
  }

  if (user.password === password) {

    let payload = {subject:user._id};
    let token = jwt.sign(payload,'secretKey');

    return res.status(200).send({'token':token,'id':user._id});
  }

  return res.status(401).send({ message: "User has typed the wrong password .." });
});

module.exports = router;
