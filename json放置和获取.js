function typeFang(dateName, zhi) {
  // 先变格式在放置
  let date = JSON.stringify(zhi);
  localStorage.setItem(dateName, date);
}
function typeDe(dateName) {
  // 先获取再变格式
  let date = localStorage.getItem(dateName);
  let json1 = JSON.parse(date);
}
