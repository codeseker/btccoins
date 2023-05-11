require("dotenv").config();

const connectDB = require("./db/db");
const data = require("./data.json");
const Coins = require("./Model/coins");

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Coins.create(data);
        console.log("Success");
        process.exit(0);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

start();