function randomInt(n, m) {
  var num = Math.floor(Math.random() * (m - n + 1) + n);
  return num;
}

function randomRgb() {
  var r = randomInt(0, 255);
  var g = randomInt(0, 255);
  var b = randomInt(0, 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomColor() {
  var arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];

  let color = ["#"];
  for (let i = 0; i < 6; i++) {
    let r = Math.floor(Math.random() * arr.length);
    r = arr[r];
    color.push(r);
  }
  return color.join("");
}

console.log(randomColor());
