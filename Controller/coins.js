const Coins = require("../Model/coins");

const getCoins = async (req, res) => {
  const coinsData = await Coins.find({});
  res.json(coinsData);
};

module.exports = getCoins;
