const createBtn = document.getElementById("createBtn");
const showBtn = document.getElementById("showBtn");
const clearBtn = document.getElementById("clearBtn");

const employee = {};

function createProfile() {
  const name = document.getElementById("name").value.trim();
  const employeeId = document.getElementById("employeeId").value.trim();
  const department = document.getElementById("department").value.trim();
  const designation = document.getElementById("designation").value.trim();
  const salary = Number(document.getElementById("salary").value);
  const email = document.getElementById("email").value.trim();

  if (
    name === "" ||
    employeeId === "" ||
    department === "" ||
    designation === "" ||
    salary <= 0 ||
    email === ""
  ) {
    alert("Please fill all fields.");
    return;
  }

  employee.name = name;
  employee.employeeId = employeeId;
  employee.department = department;
  employee.designation = designation;
  employee.salary = salary;
  employee.email = email;

  console.log(employee);
  console.table(employee);

  alert("Employee Profile Created Successfully");
}

function showProfile() {
  document.getElementById("showName").textContent = employee.name || "----";
  document.getElementById("showEmployeeId").textContent =
    employee.employeeId || "----";
  document.getElementById("showDepartment").textContent =
    employee.department || "----";
  document.getElementById("showDesignation").textContent =
    employee.designation || "----";
  document.getElementById("showSalary").textContent = employee.salary
    ? `₹${employee.salary.toLocaleString()}`
    : "----";
  document.getElementById("showEmail").textContent = employee.email || "----";
}

function clearProfile() {
  document.getElementById("name").value = "";
  document.getElementById("employeeId").value = "";
  document.getElementById("department").value = "";
  document.getElementById("designation").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("email").value = "";

  delete employee.name;
  delete employee.employeeId;
  delete employee.department;
  delete employee.designation;
  delete employee.salary;
  delete employee.email;

  document.getElementById("showName").textContent = "----";
  document.getElementById("showEmployeeId").textContent = "----";
  document.getElementById("showDepartment").textContent = "----";
  document.getElementById("showDesignation").textContent = "----";
  document.getElementById("showSalary").textContent = "----";
  document.getElementById("showEmail").textContent = "----";

  console.clear();
  console.log("Profile Cleared");
}

createBtn.addEventListener("click", createProfile);
showBtn.addEventListener("click", showProfile);
clearBtn.addEventListener("click", clearProfile);
