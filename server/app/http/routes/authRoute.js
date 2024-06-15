const express = require('express');
const router = express.Router();

const registerController = require('../controllers/register');
const loginController = require('../controllers/login')
const validateRegister = require('../midddleware/registerValidation');
const validateLogin = require('../midddleware/loginValidation');


router.post('/auth/register', validateRegister, registerController.register);
router.post('/auth/login', validateLogin, loginController.login);


module.exports = router;