function randomInt(n, m) {
  var num = Math.floor(Math.random() * (m - n + 1) + n);
  return num;
}

function randomRgb(n, m) {
  var r = randomInt(0, 255);
  var g = randomInt(0, 255);
  var b = randomInt(0, 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
