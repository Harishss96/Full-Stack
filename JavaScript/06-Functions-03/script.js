
const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");

let productName = "";
let productPrice = 0;
let productQuantity = 0;
let coupon = 0;
let gst = 0;

let subtotal = 0;
let discount = 0;
let delivery = 0;
let gstAmount = 0;
let grandTotal = 0;

function calculateSubtotal() {
  subtotal = productPrice * productQuantity;
  return subtotal;
}

function calculateDiscount() {
  discount = subtotal * (coupon / 100);
  return discount;
}

function calculateDelivery() {
  if (subtotal >= 1000) {
    delivery = 0;
  } else {
    delivery = 99;
  }

  return delivery;
}

function calculateGST() {
  const taxableAmount = subtotal - discount + delivery;

  gstAmount = taxableAmount * (gst / 100);

  return gstAmount;
}

function calculateGrandTotal() {
  grandTotal = subtotal - discount + delivery + gstAmount;

  return grandTotal;
}

function showInvoice() {
  document.getElementById("showProduct").textContent = productName;

  document.getElementById(
    "showSubtotal"
  ).textContent = `₹${subtotal.toLocaleString()}`;

  document.getElementById(
    "showDiscount"
  ).textContent = `₹${discount.toLocaleString()}`;

  document.getElementById("showDelivery").textContent =
    delivery === 0 ? "FREE" : `₹${delivery}`;

  document.getElementById(
    "showGST"
  ).textContent = `₹${gstAmount.toLocaleString()}`;

  document.getElementById(
    "showTotal"
  ).textContent = `₹${grandTotal.toLocaleString()}`;
}

function calculateBill() {
  productName = document.getElementById("productName").value;

  productPrice = Number(document.getElementById("price").value);

  productQuantity = Number(document.getElementById("quantity").value);

  coupon = Number(document.getElementById("coupon").value);

  gst = Number(document.getElementById("gst").value);

  if (
    productName === "" ||
    productPrice <= 0 ||
    productQuantity <= 0 ||
    coupon < 0 ||
    gst < 0
  ) {
    alert("Please fill all fields correctly.");
    return;
  }

  calculateSubtotal();

  calculateDiscount();

  calculateDelivery();

  calculateGST();

  calculateGrandTotal();

  showInvoice();

  console.log("========== CHECKOUT ==========");
  console.log("Product :", productName);
  console.log("Price :", productPrice);
  console.log("Quantity :", productQuantity);
  console.log("Subtotal :", subtotal);
  console.log("Discount :", discount);
  console.log("Delivery :", delivery);
  console.log("GST :", gstAmount);
  console.log("Grand Total :", grandTotal);
}

function clearInvoice() {
  document.getElementById("productName").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("coupon").value = "";
  document.getElementById("gst").value = "";

  productName = "";
  productPrice = 0;
  productQuantity = 0;
  coupon = 0;
  gst = 0;

  subtotal = 0;
  discount = 0;
  delivery = 0;
  gstAmount = 0;
  grandTotal = 0;

  document.getElementById("showProduct").textContent = "----";
  document.getElementById("showSubtotal").textContent = "----";
  document.getElementById("showDiscount").textContent = "----";
  document.getElementById("showDelivery").textContent = "----";
  document.getElementById("showGST").textContent = "----";
  document.getElementById("showTotal").textContent = "----";

  console.clear();

  console.log("Invoice Cleared Successfully.");
}

calculateBtn.addEventListener("click", calculateBill);

clearBtn.addEventListener("click", clearInvoice);