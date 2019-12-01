// console.log(1);

$(() => {
  let arr = show.get("shuju");
  let item = "";
  arr.forEach(e => {
    item += ` <div class="item" data-id="${e.pID}">
        <div class="row">
          <div class="cell col-1 row">
            <div class="cell col-1">
              <input type="checkbox" class="item-ck" ${
                e.isChecked ? "checked" : ""
              }>
            </div>
            <div class="cell col-4">
              <img src=${e.imgSrc} alt="">
            </div>
          </div>
          <div class="cell col-4 row">
            <div class="item-name">${e.name}</div>
          </div>
          <div class="cell col-1 tc lh70">
            <span>￥</span>
            <em class="price">${e.price}</em>
          </div>
          <div class="cell col-1 tc lh70">
            <div class="item-count">
              <a href="javascript:void(0);" class="reduce fl ">-</a>
              <input autocomplete="off" type="text" class="number fl" value="${
                e.number
              }">
              <a href="javascript:void(0);" class="add fl">+</a>
            </div>
          </div>
          <div class="cell col-1 tc lh70">
            <span>￥</span>
            <em class="computed">${e.number * e.price}</em>
          </div>
          <div class="cell col-1">
            <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
          </div>
        </div>
      </div>`;
  });
  $(".item-list").html(item);
  if ($(".item-list .item").length != 0) {
    $(".total-of").show();
    $(".cart-header").show();
    $(".empty-tip").hide();
  }

  let noAll = arr.find(e => {
    return !e.isChecked;
  });
  $(".pick-all").prop("checked", !noAll);
  $(".pick-all").on("click", function() {
    //此时这里只能用this,如果$(".pick-all")的话下面的全选按钮会失效；
    let all = $(this).prop("checked");
    $(".item-ck").prop("checked", all);
    $(".pick-all").prop("checked", all);
    arr.forEach(function(e) {
      e.isChecked = all;
    });
    show.set("shuju", arr);
    total();
  });

  $(".item-ck").on("click", function() {
    $(".pick-all").prop(
      "checked",
      $(".item-ck").length === $(".item-ck:checked").length
    );
    // 记住啊这里也是需要用this的不然它不知道要保存的是哪个。。。；
    let id = $(this)
      .parents(".item")
      .attr("data-id");
    let obj = arr.find(e => {
      return e.pID == id;
    });
    let isChecked = $(this).prop("checked");
    obj.isChecked = isChecked;
    show.set("shuju", arr);
    total();
  });
  total();
  function total() {
    let allCount = 0;
    let allMoney = 0;
    arr.forEach(function(e, i) {
      if (e.isChecked) {
        // 添加本地中的实时数据；
        allCount += e.number;
        allMoney += e.number * e.price;
      }
      $(".selected").text(allCount);
      $(".total-money").text(allMoney);
    });
  }
  // 实现加法
  $(".item-list").on("click", ".add", function() {
    // console.log(1);
    let val = $(this)
      .prev()
      .val();
    val++;
    let id = $(this)
      .parents(".item")
      .attr("data-id");
    let obj = arr.find(e => {
      return e.pID == id;
    });
    obj.number = parseInt(val);
    $(this)
      .parents(".item")
      .find(".computed")
      .text(obj.number * obj.price);
    $(this)
      .prev()
      .val(val);
    show.set("shuju", arr);

    total();
  });

  // 实现减法
  $(".item-list").on("click", ".reduce", function() {
    // console.log(1);
    let val = $(this)
      .next()
      .val();
    if (val <= 1) return;
    val--;
    let id = $(this)
      .parents(".item")
      .attr("data-id");
    let obj = arr.find(e => {
      return e.pID == id;
    });
    obj.number = parseInt(val);
    $(this)
      .next()
      .val(val);
    $(this)
      .parents(".item")
      .find(".computed")
      .text(obj.number * obj.price);
    show.set("shuju", arr);
    total();
  });
  // 数量框里面的
  $(".item-list").on("focus", ".number", function() {
    let val = $(this).val();
    $(this).attr("old", val);
    // console.log(1);
  });
  $(".item-list").on("blur", ".number", function() {
    // let arr = show.get("shuju");
    let val = $(this).val();
    if (isNaN(val) || val.trim().length === 0 || val < 1) {
      $(this).val($(this).attr("old"));
    }
    let id = $(this)
      .parents(".item")
      .attr("data-id");
    let obj = arr.find(e => {
      return e.pID == id;
    });
    obj.number = parseInt(val);
    $(this)
      .parents(".item")
      .find(".computed")
      .text(obj.number * obj.price);
    show.set("shuju", arr);
    total();
  });
  $(".item-list").on("keyup", ".number", function(e) {
    // console.log(e);
    if (e.keyCode === 13) {
      let val = $(this).val();
      if (isNaN(val) || val.trim().length === 0 || val < 1) {
        $(this).val($(this).attr("old"));
      }
      let id = $(this)
        .parents(".item")
        .attr("data-id");
      let obj = arr.find(e => {
        return e.pID == id;
      });
      obj.number = parseInt(val);
      $(this)
        .parents(".item")
        .find(".computed")
        .text(obj.number * obj.price);
      show.set("shuju", arr);
      total();
    }
  });
  $(".item-list").on("click", ".item-del", function() {
    // console.log(this);
    let tu = confirm("确认要删除吗？");
    if (tu) {
      $(this)
        .parents(".item")
        .remove();
      let id = $(this)
        .parents(".item")
        .attr("data-id");
      arr = arr.filter(e => {
        return e.pID != id;
      });
      show.set("shuju", arr);
    }
  });
});
