// Product Information

const productName = "MacBook Pro";
const productPrice = 120000;
const productQuantity = 2;
const shippingCost = 500;
const discountPercentage = 10;
const gstPercentage = 18;

// Display Product Details

document.getElementById("product").textContent = productName;
document.getElementById("price").textContent =
  `₹${productPrice.toLocaleString()}`;
document.getElementById("quantity").textContent = productQuantity;
document.getElementById("shipping").textContent =
  `₹${shippingCost.toLocaleString()}`;

// Calculations

// Product Total
const productTotal = productPrice * productQuantity;

// Subtotal
const subtotal = productTotal + shippingCost;

// Discount Amount
const discountAmount = (subtotal * discountPercentage) / 100;

// Amount After Discount
const amountAfterDiscount = subtotal - discountAmount;

// GST Amount
const gstAmount = (amountAfterDiscount * gstPercentage) / 100;

// Final Amount
const finalAmount = amountAfterDiscount + gstAmount;

// Display Billing Summary

document.getElementById("subtotal").textContent =
  `₹${subtotal.toLocaleString()}`;
document.getElementById("discount").textContent =
  `- ₹${discountAmount.toLocaleString()}`;
document.getElementById("gst").textContent = `₹${gstAmount.toLocaleString()}`;
document.getElementById("total").textContent =
  `₹${finalAmount.toLocaleString()}`;

// Console Output

console.log("========== PRODUCT ==========");
console.log("Product Name :", productName);
console.log("Price :", productPrice);
console.log("Quantity :", productQuantity);
console.log("Shipping :", shippingCost);

console.log("========== BILL ==========");
console.log("Product Total :", productTotal);
console.log("Subtotal :", subtotal);
console.log("Discount :", discountAmount);
console.log("Amount After Discount :", amountAfterDiscount);
console.log("GST :", gstAmount);
console.log("Final Amount :", finalAmount);

// Comparison Operators

console.log("Is Final Amount > 5000 ?", finalAmount > 5000);
console.log("Is Quantity == 5 ?", productQuantity == 5);
console.log("Is Shipping Free ?", shippingCost === 0);

// Logical Operators

const isPremiumCustomer = true;
const couponApplied = true;

console.log(
  "Eligible For Free Shipping?",
  isPremiumCustomer || shippingCost === 0,
);

console.log("Eligible For Extra Discount?", isPremiumCustomer && couponApplied);

// Unary Operators

let stock = 20;
let cartQuantity = productQuantity;

stock--;
cartQuantity++;

console.log("Remaining Stock :", stock);
console.log("Updated Quantity :", cartQuantity);
