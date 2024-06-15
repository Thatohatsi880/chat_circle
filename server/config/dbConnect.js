const mongoose = require('mongoose');

let database = process.env.MONGO_URL;

if (!database) {
  throw new Error(
    "One environment variable ( MONGODB_URL) is missing or empty."
  );
}

mongoose
  .connect(database)
    .then(() => {
        // logger.info(`DB Connection Established`);
        console.log('database connected successfully');
    }) .catch((error) => {
        // logger.error(`DB Connection Fail | ${err.stack}`);
        console.log(error)
    });







  