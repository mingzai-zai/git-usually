// console.log(1);

$(() => {
  let id = location.search.substring(4);
  /* phoneData.forEach(e => {
    if (e.pID == id) {
      console.log(1);
      $(".sku-name").text(e.name);
      $(".summary em").text("¥" + e.price);
      $(".preview-img img").attr("src", e.imgSrc);
    }
  }); */
  let target = phoneData.find(e => {
    return e.pID == id;
    // 一个等号就是赋值，会没有效果的；
  });
  $(".sku-name").text(target.name);
  $(".summary em").text("¥" + target.price);
  $(".preview-img img").attr("src", target.imgSrc);

  $(".addshopcar").on("click", function() {
    let arr = show.get("shuju");
    // console.log(arr);

    let exist = arr.find(e => {
      return e.pID == id;
    });
    let val = $(".choose-number").val();
    // 获取完后再去判断是否符合，如果在前面就判断会执行不了；
    if (isNaN(val) || val.trim().length === 0 || val < 1) return;
    val = parseInt(val);
    if (exist) {
      exist.number += val;
    } else {
      let obj = {
        pID: target.pID,
        imgSrc: target.imgSrc,
        name: target.name,
        price: target.price,
        number: val,
        isChecked: true
      };
      arr.push(obj);
    }
    show.set("shuju", arr);
    location.href = "cart.html";
  });
});
