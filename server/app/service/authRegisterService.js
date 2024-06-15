const { hashPassword } = require('../utilities/hash');
const ULID = require('ulid');
const Users = require("../http/models/usersModel");
const ResourceExists = require("../errors/resourceExist");


async function registerUser(userData) {
    const { email, username, password } = userData;
  
    const existingUser = await Users.findOne({ email });
  
    if (existingUser) {
      throw new ResourceExists(
        "A user with the provided username or email address exists"
      );
    }
  
    const today = new Date();
  
    let hashedPassword = await hashPassword(password);
  
    const newUser = await Users.create({
      id: ULID.ulid(),
      email,
      username,
      password: hashedPassword
    });
  
    const result = {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username
    };
  
    return result;
  }
  


module.exports = {registerUser};