const product = {
  plainBurger: {
    name: "GAMBURGER",
    price: 10000,
    kkal: 600,
    amount: 0,
    get Summ() {
      return this.price * this.amount;
    },
    get kkalSum() {
      return this.kkal * this.amount;
    },
  },
  freshBurger: {
    name: "GAMBURGER FRESH",
    price: 20500,
    kkal: 800,
    amount: 0,
    get Summ() {
      return this.price * this.amount;
    },
    get kkalSum() {
      return this.kkal * this.amount;
    },
  },
  freshCombo: {
    name: "FRESH COMBO",
    price: 31900,
    kkal: 1100,
    amount: 0,
    get Summ() {
      return this.price * this.amount;
    },
    get kkalSum() {
      return this.kkal * this.amount;
    },
  },
};

const btn = document.querySelectorAll(".main__product-btn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    plusOrMinus(this);
  });
}
function plusOrMinus(el) {
  const parent = el.closest(".main__product"),
    num = parent.querySelector(".main__product-num"),
    price = parent.querySelector(".main__product-price span"),
    kkal = parent.querySelector(".main__product-kcall span"),
    attribute = el.getAttribute("data-symbol"),
    parentId = parent.getAttribute("id");

  if (attribute == "+") {
    product[parentId].amount++;
  } else if (attribute == "-" && product[parentId].amount > 0) {
    product[parentId].amount--;
  }
  num.innerHTML = product[parentId].amount;
  price.innerHTML = product[parentId].Summ;
  kkal.innerHTML = product[parentId].kkalSum;
}

const extra = document.querySelector(".header__timer-extra");
window.onload = () => number();
function number() {
  extra.innerHTML++;
  if (extra.innerHTML < 50) {
    setTimeout(() => {
      number();
    }, 10);
  } else if (extra.innerHTML < 100) {
    setTimeout(() => {
      number();
    }, 50);
  }
}
const mainProductInfo = document.querySelectorAll(".main__product-info"),
  view = document.querySelector(".view"),
  viewClose = document.querySelector(".view__close"),
  viewImg = document.querySelector(".view img");

for (let i = 0; i < mainProductInfo.length; i++) {
  mainProductInfo[i].addEventListener("dblclick", function () {
    view.classList.add("active");
    addImg(this);
  });
}

function addImg(btn) {
  let img = btn.querySelector(".main__product-img"),
    imgAtt = img.getAttribute("src");
  viewImg.setAttribute("src", imgAtt);
}
viewClose.onclick = () => view.classList.remove("active");

// Receipt

const addCart = document.querySelector(".addCart"),
  receipt = document.querySelector(".receipt"),
  receiptWindow = document.querySelector(".receipt__window"),
  receiptWindowOut = document.querySelector(".receipt__window-out");

addCart.addEventListener("click", () => {
  receipt.style = `display:flex`;
  setTimeout(() => {
    receipt.style.opacity = "1";
    receiptWindow.style = `top:15%`;
  }, 500);
  let text = "";
  text +=`<h1 style="margin-bottom:30px">Receipt : </h1>`
  const objValue = Object.values(product).filter((num) => num.amount);
  let totalSumm = 0;

  for (let i = 0; i < objValue.length; i++) {
    totalSumm += objValue[i].Summ;
    text += `<div class="product">
                  <span>${i+1}</span>
                  <div class="product__name">${objValue[i].name}</div>
                  <div class="product__amount">${objValue[i].amount} x ${objValue[i].price} = </div>
                  <div class="product__price">${objValue[i].Summ}</div>
                  
                  </div>`;
                  
  }
  text += `\n<div class="product__price narx"> 🛒 TotalPrice - ${totalSumm}</div>`
  receiptWindowOut.innerHTML = text;

});
 const pay = document.querySelector(".receipt__window-btn");

 pay.addEventListener('click', ()=>{
  window.location.reload()
 })
