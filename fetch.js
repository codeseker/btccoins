const fetch = require("node-fetch");
const fs = require("fs");
const file = fs.createWriteStream("data.json");

let count = 0;
let arr = [];
const top = async () => {
  try {
    await fetch("https://api.wazirx.com/api/v2/tickers")
      .then((res) => res.json())
      .then((data) => {
        let ans = Object.entries(data);
        ans.map(async (element) => {
          delete element[1].quote_unit;
          delete element[1].low;
          delete element[1].high;
          delete element[1].type;
          delete element[1].open;
          delete element[1].at;
          if (count < 10) {
            const dummy = element[1];
            arr.push(dummy);
            count++;
          }
        });
      });
    file.write(JSON.stringify(arr));
    file.end();
    console.log("Fetched properly...");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

top();
