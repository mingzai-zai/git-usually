let arr = show.get("shuju");
let all = 0;
arr.forEach(e => {
  all += e.number;
});
$(".shopcar .count").text(all);
