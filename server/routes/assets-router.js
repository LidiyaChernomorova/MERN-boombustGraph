const express = require("express");
const router = express.Router();
const path = require("path");
const dirname = path.dirname(require.main.filename);

router.get("/meta-data", (req, res) => {
  res.sendFile(dirname + "/assets/meta-data.json");
});

router.get("/asset/:name", (req, res) => {
  res.sendFile(dirname + `/assets/companies-data/json/quarter-hour/${req.params.name}.json`);
});

module.exports = router;
