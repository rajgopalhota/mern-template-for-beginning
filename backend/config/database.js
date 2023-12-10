const mongoURI =
  "mongodb+srv://raja:2003@cluster0.vyncxaw.mongodb.net/InternProject/?retryWrites=true&w=majority";

const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

module.exports = connectToMongo;
