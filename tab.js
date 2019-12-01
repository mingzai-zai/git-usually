class Tab {
  constructor(obj) {
    this.obj = obj || {};
    this.typeSelector = obj.typeSelector || ".item";
    this.contentSelector = obj.contentSelector || ".content";
    this.onType = obj.onType || "mouseover";
    this.bgc = obj.bgc || "active";
    this.show = obj.show || "show";
    this.items = document.querySelectorAll(this.typeSelector);
    this.contents = document.querySelectorAll(this.contentSelector);
    this.event();
  }
  event() {
    // 注册事件
    this.items.forEach((e, i) => {
      e.addEventListener(this.onType, e => {
        this.content(i);
        let target = e.target;
        this.item(target);
      });
    });
  }
  item(who) {
    // 切换背景属性
    this.items.forEach(e => {
      e.classList.remove(this.bgc);
    });
    who.classList.add(this.bgc);
  }
  content(index) {
    //切换内容
    this.contents.forEach(e => {
      e.classList.remove(this.show);
    });
    this.contents[index].classList.add(this.show);
  }
}
let liangZai = new Tab({
  bgc: "p"
});

// let aa = new Tab();
