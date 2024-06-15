const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors')
const logger = require("morgan");
const rotatingFileStream = require("../config/logger");
require("dotenv").config();
require("../config/dbConnect");

const authRouter = require("./http/routes/authRoute");


const app = express();

app.use(logger("combined", { stream: rotatingFileStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", authRouter);



module.exports = app;
