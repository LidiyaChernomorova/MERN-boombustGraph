const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./csv-to-json");

const db = require("./db");
const noteRouter = require("./routes/note-router");
const assetsRouter = require("./routes/assets-router");

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", noteRouter);
app.use("/api", assetsRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

app.use(express.static("public"));
