const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// MongoDb + Dotenv
require("dotenv").config({ path: "./config/.env" });
// require("./config/db");

// Routes
const imgRoute = require("./routes/image.route");

// Express
const app = express();

// Cors
const corsOptions = {
  origin: true,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

// Body-parser
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    parameterLimit: 10000,
    extended: true,
    limit: "50mb",
  }),
);

// Routes
app.use("/img", imgRoute);

// Server
app.listen(5000, () => {
  console.log(`Listening on port 5000`);
});
