const jwt = require("jsonwebtoken");
const { compareHash } = require('../utilities/hash');
const Users = require("../http/models/usersModel");
const AuthenticationError = require("../errors/authenticationError");


async function loginUser(email, password) {
    const user = await Users.findOne({ email });
  
    if (user === null) {
      throw new AuthenticationError("User credentials do not match our records");
    }
  
    const passwordCompare = await compareHash(password, user.password);
  
    if (passwordCompare === false) {
      throw new AuthenticationError("User credentials do not match our records");
    }
  
    const token = jwt.sign(
      {
        id: user.id,
        email: user?.email,
        password: user?.password
      },
      process.env.SECRET_KEY, 
      {
        expiresIn: 360000,
      }
    );
  
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      token: token,
    };
  }

  module.exports = {loginUser};