const registeredEmail = "harishtest@gmsil.com";
const registeredPassword = "123456";
const userEmail = "harishtest@gmsil.com";
const userPassword = "123456";
const isVerified  = true;
const isActivePlan = true;
const userRole = "Admin";

document.getElementById("email").textContent = userEmail;
document.getElementById("password").textContent = userPassword;

if (userEmail === registeredEmail && userPassword === registeredPassword) {
  document.getElementById("status").textContent = "✅ Login Successful";
} else {
  document.getElementById("status").textContent = "❌ Invalid Credentials";
}

if (isVerified) {
  document.getElementById("verified").textContent = "✅ verified";
} else {
  document.getElementById("verified").textContent = "❌ Not verified";
}
if (isActivePlan) {
  document.getElementById("subscription").textContent = "✅ Active";
} else {
  document.getElementById("subscription").textContent = "❌ Active";
}

// if (
//   userEmail === registeredEmail &&
//   userPassword === registeredPassword &&
//   isVerified &&
//   isActivePlan
// ) {
//   document.getElementById("access").textContent = "Access Granted";
// }

if (userRole === "Admin") {
  document.getElementById("role").textContent = "User is Admin";
} else if (userRole === "Manager") {
  document.getElementById("role").textContent = "User is Manager";
} else if (userRole === "Customer") {
  document.getElementById("role").textContent = "User is Customer";
} else {
  document.getElementById("role").textContent = "User role is not defined";
}

// Console Output

console.log("========== LOGIN DETAILS ==========");

console.log("Registered Email :", registeredEmail);
console.log("User Email :", userEmail);

console.log("Registered Password :", registeredPassword);
console.log("User Password :", userPassword);

console.log("Email Verified :", isVerified );
console.log("Subscription Active :", isActivePlan);
console.log("Role :", userRole);

console.log("===================================");

console.log("Login Success :", userEmail === registeredEmail && userPassword === registeredPassword);
console.log("Access Granted :", userEmail === registeredEmail &&
    userPassword === registeredPassword &&
    isVerified &&
    isActivePlan);
