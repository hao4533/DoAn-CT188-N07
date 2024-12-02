var itemList = {
  sp01: {
    name: "Realme 11Pro",
    price: 5590000,
    photo: "img/realme/11 Pro Plus.jfif",
  },
  sp02: {
    name: "Realme c61",
    price: 5190000,
    photo: "img/realme/c61.webp",
  },
  sp03: {},

  sp04: {
    name: "IPhone 16",
    price: 25290000,
    photo: "img/IPhone/iphone16.jfif",
  },
  sp05: {
    name: "IPhone 16Pro",
    price: 31990000,
    photo: "img/IPhone/iphone16pro.png",
  },
  sp06: {
    name: "IPhone 15",
    price: 22890000,
    photo: "img/IPhone/iphone15.webp",
  },
  sp07: {
    name: "SamSung Galaxy M55 5G",
    price: 9990000,
    photo: "img/SamSung/m55.webp",
  },
  sp08: {
    name: "Samsung Galaxy S24",
    price: 17990000,
    photo: "img/SamSung/s24.webp",
  },
  sp09: {
    name: "Samsung Galaxy Z Fold6 5G",
    price: 46715000,
    photo: "img/SamSung/fold6.jpg",
  },
};

function addCart(code) {
  let number = parseInt(document.getElementById(code).value);
  if (number == 0) return;
  if (typeof localStorage[code] === "undefined") {
    window.localStorage.setItem(code, number);
    alert("Đặt hàng thành công.");
  } else {
    current = parseInt(window.localStorage.getItem(code));
    if (number + current > 100) {
      window.localStorage.setItem(code, 100);
      alert("Tổng số lượng đặt hàng đã vượt quá 100.");
      return;
    } else {
      window.localStorage.setItem(code, number + current);
      alert("Đặt hàng thành công. ");
    }
  }
}

function removeCart(code) {
  if (typeof window.localStorage[code] !== "undefined") {
    window.localStorage.removeItem(code);
    document
      .getElementById("cartDetail")
      .getElementsByTagName("tbody")[0].innerHTML = "";
    showCart();
  }
}

function getDiscountRate() {
  var d = new Date();
  var weekday = d.getDay();
  var totalMins = d.getHours() * 60 + d.getMinutes();
  if (
    weekday >= 1 &&
    weekday <= 3 &&
    ((totalMins >= 420 && totalMins <= 660) ||
      (totalMins >= 780 && totalMins <= 1020))
  )
    return 0.1;
  return 0;
}

function showCart() {
  var tbody = document
    .getElementById("cartDetail")
    .getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  var formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  var totalPreTax = 0;
  for (let i = 0; i < window.localStorage.length; i++) {
    if (typeof itemList[localStorage.key(i)] === "undefined") continue;
    var key = window.localStorage.key(i);
    var item = itemList[key];
    var qty = localStorage.getItem(key);

    var photo = document.createElement("td");
    photo.innerHTML = "<img src='" + item.photo + "' width='100px'/>";
    photo.style.textAlign = "center";

    var name = document.createElement("td");
    name.innerHTML = item.name;

    var quantity = document.createElement("td");
    quantity.innerHTML = qty;
    quantity.style.textAlign = "right";

    var price = document.createElement("td");
    price.innerHTML = formatter.format(item.price);
    price.style.textAlign = "right";

    var total = document.createElement("td");
    total.innerHTML = formatter.format(item.price * qty);
    total.style.textAlign = "right";
    totalPreTax += item.price * qty;

    var bin = document.createElement("a");
    bin.innerHTML = "<i class='fa fa-trash trash-icon'></i>";
    bin.setAttribute("href", "#");
    bin.setAttribute("data-code", key);
    bin.onclick = function () {
      removeCart(this.dataset.code);
    };

    var rm = document.createElement("td");
    rm.appendChild(bin);
    rm.style.textAlign = "center";

    var row = document.createElement("tr");
    row.appendChild(photo);
    row.appendChild(name);
    row.appendChild(quantity);
    row.appendChild(price);
    row.appendChild(total);
    row.appendChild(rm);

    tbody.appendChild(row);
  }
  var discountRate = getDiscountRate();
  var discount = totalPreTax * discountRate;
  var tax = 0.1 * (totalPreTax - discount);
  document.getElementById("bill_totalpretax").innerHTML =
    formatter.format(totalPreTax);
  document.getElementById("bill_discount").innerHTML =
    discountRate + " x A = " + formatter.format(discount);
  document.getElementById("bill_tax").innerHTML = formatter.format(tax);
  document.getElementById("bill_total").innerHTML = formatter.format(
    totalPreTax - discount + tax
  );
}
function confirmOrder() {
  if (window.localStorage.length === 0) {
    alert(
      "Giỏ hàng của bạn đang trống! Vui lòng chọn sản phẩm trước khi xác nhận."
    );
    return;
  }
  alert(
    "Cảm ơn bạn đã đặt hàng tại THN-Phone! Đơn hàng của bạn đã được xác nhận."
  );
  window.localStorage.clear();
  location.reload();
}
