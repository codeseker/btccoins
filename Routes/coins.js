const express = require("express");
const router = express.Router();
const getCoins = require("../Controller/coins");

router.route("/coins").get(getCoins);

module.exports = router;