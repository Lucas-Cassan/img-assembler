const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// MongoDb + Dotenv
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

// Routes
const imgRoute = require("./routes/image.route");

// Express
const app = express();

// Cors
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/img", imgRoute);

// Server
app.listen(5000, () => {
  console.log(`Listening on port 5000`);
});
