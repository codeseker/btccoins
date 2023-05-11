require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const connectDB = require("./db/db");
const coinsRouter = require("./Routes/coins");

app.use(express.json());
app.use(express.static("public"));
app.use("/api/v1/", coinsRouter);

const hostname = '0.0.0.0';
const port = 4000;
const start = async () => {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, hostname, () => {
        console.log("Connected");
    })
};

start();
