const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.signIn = async (req, res) => {
    const { email, password } = req.body;
  
    const userWithEmail = await User.findOne({ where: { email } }).catch(
      (err) => {
        console.log("Error: ", err);
      }
    );
  
    if (!userWithEmail){
      return res
      .status(400)
      .json({ message: "Email or password does not match!" });
    }
    
    const validatePassword = await bcrypt.compare(password, userWithEmail.password)
    
    if (!validatePassword){
      return res
        .status(400)
        .json({ message: "Email or password does not match!" });
    }
  
    const jwtToken = jwt.sign(
      { id: userWithEmail.id, email: userWithEmail.email },
      process.env.JWT_SECRET
    );
  
    res.json({ message: `Welcome Back ${userWithEmail.username} !!!`, token: jwtToken });
  }