
const showBtn = document.getElementById("showBtn");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

let currentBalance = 0;
let lastTransaction = "No Transaction";

function showAccount() {
  const accountHolder = document.getElementById("accountHolder").value;
  const accountNumber = document.getElementById("accountNumber").value;

  currentBalance = Number(document.getElementById("balance").value);

  document.getElementById("showName").textContent = accountHolder;
  document.getElementById("showAccount").textContent = accountNumber;
  document.getElementById("showBalance").textContent =
    `₹${currentBalance.toLocaleString()}`;
  document.getElementById("transaction").textContent = lastTransaction;

  console.log("========== ACCOUNT DETAILS ==========");
  console.log("Account Holder :", accountHolder);
  console.log("Account Number :", accountNumber);
  console.log("Current Balance :", currentBalance);
}

function depositMoney() {
  const depositAmount = Number(document.getElementById("deposit").value);

  if (depositAmount <= 0) {
    alert("Enter a valid deposit amount.");
    return;
  }

  currentBalance += depositAmount;

  document.getElementById("showBalance").textContent =
    `₹${currentBalance.toLocaleString()}`;

  lastTransaction = `Deposited ₹${depositAmount.toLocaleString()}`;

  document.getElementById("transaction").textContent = lastTransaction;

  console.log("========== DEPOSIT ==========");
  console.log("Deposit :", depositAmount);
  console.log("Current Balance :", currentBalance);
}


function withdrawMoney() {
  const withdrawAmount = Number(document.getElementById("withdraw").value);

  if (withdrawAmount <= 0) {
    alert("Enter a valid withdrawal amount.");
    return;
  }

  if (withdrawAmount > currentBalance) {
    alert("Insufficient Balance");
    return;
  }

  currentBalance -= withdrawAmount;

  document.getElementById("showBalance").textContent =
    `₹${currentBalance.toLocaleString()}`;

  lastTransaction = `Withdraw ₹${withdrawAmount.toLocaleString()}`;

  document.getElementById("transaction").textContent = lastTransaction;

  console.log("========== WITHDRAW ==========");
  console.log("Withdraw :", withdrawAmount);
  console.log("Current Balance :", currentBalance);
}

showBtn.addEventListener("click", showAccount);

depositBtn.addEventListener("click", depositMoney);

withdrawBtn.addEventListener("click", withdrawMoney);
