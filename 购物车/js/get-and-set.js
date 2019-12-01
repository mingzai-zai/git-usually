let show = {};
show.get = function(name) {
  let data = localStorage.getItem(name);
  data = JSON.parse(data) || [];
  return data;
};
show.set = function(name, data) {
  let data1 = JSON.stringify(data);
  localStorage.setItem(name, data1);
};
