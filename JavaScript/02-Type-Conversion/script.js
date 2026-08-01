
const monthlyPrice = "499";
const months = "12";
const discount = "15";
const gst = "18";



document.getElementById("price").textContent = `₹${monthlyPrice}`;
document.getElementById("months").textContent = `${months} Months`;
document.getElementById("discount").textContent = `${discount}%`;
document.getElementById("gst").textContent = `${gst}%`;



const price = Number(monthlyPrice);
const duration = Number(months);
const discountPercentage = Number(discount);
const gstPercentage = Number(gst);



// Total before discount and GST
const subtotal = price * duration;

// Discount Amount
const discountAmount = (subtotal * discountPercentage) / 100;

// Price after discount
const afterDiscount = subtotal - discountAmount;

// GST Amount
const gstAmount = (afterDiscount * gstPercentage) / 100;

// Final Amount
const total = afterDiscount + gstAmount;



document.getElementById("subtotal").textContent = `₹${subtotal.toFixed(2)}`;
document.getElementById("discountAmount").textContent = `₹${discountAmount.toFixed(2)}`;
document.getElementById("gstAmount").textContent = `₹${gstAmount.toFixed(2)}`;
document.getElementById("total").textContent = `₹${total.toFixed(2)}`;

// Console Output

console.log("===== ORIGINAL VALUES =====");
console.log(monthlyPrice, typeof monthlyPrice);
console.log(months, typeof months);
console.log(discount, typeof discount);
console.log(gst, typeof gst);

console.log("===== CONVERTED VALUES =====");
console.log(price, typeof price);
console.log(duration, typeof duration);
console.log(discountPercentage, typeof discountPercentage);
console.log(gstPercentage, typeof gstPercentage);

// Conversion Practice

const samples = [
  "499",
  "499.99",
  "true",
  "false",
  "",
  "100abc"
];

console.log("===== TYPE CONVERSION PRACTICE =====");

samples.forEach(value => {
  console.table({
    Original: value,
    Number: Number(value),
    parseInt: parseInt(value),
    parseFloat: parseFloat(value),
    Boolean: Boolean(value),
    String: String(value)
  });
});