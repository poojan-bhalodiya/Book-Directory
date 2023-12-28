const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const directoryrouter = require("./routes/directory-router");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use router
app.use(directoryrouter);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB server");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, (req, res) => {
  console.log(`Port is running on ${port}`);
});
