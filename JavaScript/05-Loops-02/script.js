// Buttons & Containers
const generateBtn = document.getElementById("generateBtn");
const employeeContainer = document.getElementById("cards");
const resetBtn = document.getElementById("resetBtn");


// Generate Employee Cards
generateBtn.addEventListener("click", () => {
  // Get Input Values
  const employeeName = document.getElementById("empName").value;
  const department = document.getElementById("empDapartment").value;
  const designation = document.getElementById("empDesignation").value;
  const salary = document.getElementById("empSalary").value;
  const cardCount = Number(document.getElementById("count").value);

  // Remove Previous Cards
  employeeContainer.innerHTML = "";

  // Validation
  if (
    employeeName === "" ||
    department === "" ||
    designation === "" ||
    salary === "" ||
    cardCount <= 0
  ) {
    alert("Please fill all fields.");
    return;
  }

  // Generate Employee Cards
  for (let i = 1; i <= cardCount; i++) {
    const employeeID = `EMP-${1000 + i}`;

    console.log(`Creating Employee Card ${i}`);
    console.log(`Employee ID: ${employeeID}`);

    employeeContainer.innerHTML += `
            <div class="card">

                <h2>${employeeName}</h2>

                <p><strong>Department:</strong> ${department}</p>

                <p><strong>Designation:</strong> ${designation}</p>

                <p><strong>Salary:</strong> ₹${Number(salary).toLocaleString()}</p>

                <p><strong>Employee ID:</strong> ${employeeID}</p>

            </div>
        `;
  }

  console.log("--------------------------------");
  console.log(`Total Employee Cards Generated: ${cardCount}`);
});

resetBtn.addEventListener("click", () => {
  // Get Input Values
  const employeeName = document.getElementById("empName").value = "";
  const department = document.getElementById("empDapartment").value = "";
  const designation = document.getElementById("empDesignation").value = "";
  const salary = document.getElementById("empSalary").value = "";
  const cardCount = Number(document.getElementById("count").value = "");

  // Remove Previous Cards
  employeeContainer.innerHTML = "";

  // Validation
 
});