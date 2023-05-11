let result = document.getElementById("result");

let cnt = 1;
const getData = async () => {
  const response = await fetch("/api/v1/coins");
  const jsonData = await response.json();
  console.log(jsonData);
  jsonData.map((element) => {
    let str = `<div id="list">
      <div>${cnt}</div>
      <div style="width:10%; text-align:center;">${element.name}</div>
      <div style="width:10%; text-align:center;">${element.last}</div>
      <div style="width:24%; text-align:center;">${element.sell} / ${element.buy}</div>
      <div style="position: relative;
      left: -76px;">${element.volume}</div>
      <div style="position: relative;
      left: -28px;">${element.base_unit}</div>
  </div>`;
    result.innerHTML += str;
    cnt++;
  });
};

getData();
