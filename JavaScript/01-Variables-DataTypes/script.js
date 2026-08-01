const User = {
    fullName: "Harish Singh",
    email: "testing@gmail.com",
    password: "19******",
    phone: 8475689786,
    country: "India",
    plan: "₹199 / Month",
    language: "English",
    profiles: 2,
    verified: true
};

document.getElementById("fullName").textContent = User.fullName;
document.getElementById("email").textContent = User.email;
document.getElementById("password").textContent = User.password;
document.getElementById("phone").textContent = User.phone;
document.getElementById("country").textContent = User.country;
document.getElementById("plan").textContent = User.plan;
document.getElementById("language").textContent = User.language;
document.getElementById("profiles").textContent = User.profiles;
document.getElementById("verified").textContent = User.verified ? "Yes" : "No";

const UserData = Object.entries(User).map(([key, value]) => ({
    Property: key,
    Value: value,
    Type: typeof value,
}));

console.table(UserData);


// if you want to print data in console table format in the terminal using (node script.js) command, you can use the following code: below Object Section

// if (typeof document !== "undefined") {
//     document.getElementById("fullName").textContent = User.fullName;
//     document.getElementById("email").textContent = User.email;
//     document.getElementById("password").textContent = User.password;
//     document.getElementById("phone").textContent = User.phone;
//     document.getElementById("country").textContent = User.country;
//     document.getElementById("plan").textContent = User.plan;
//     document.getElementById("language").textContent = User.language;
//     document.getElementById("profiles").textContent = User.profiles;
//     document.getElementById("verified").textContent = User.verified;
// }

// const UserData = Object.entries(User).map(([key, value]) => ({
//     Property: key,
//     Value: value,
//     Type: typeof value,
// }));

// console.table(UserData);