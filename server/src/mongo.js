const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const connectWithDb = () => {
    mongoose.connect(uri, options, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    });
};

module.exports = connectWithDb;
