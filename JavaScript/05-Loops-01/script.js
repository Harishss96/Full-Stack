const generateBtn = document.getElementById("generateBtn");
const productsContainer = document.getElementById("products");
const resetBtn = document.getElementById("resetBtn");

generateBtn.addEventListener("click", () => {
  // Get Input Values
  const productName = document.getElementById("productName").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;
  const quantity = document.getElementById("quantity").value;

    productsContainer.innerHTML = "";

  // Generate 10 Product Cards
  for (let i = 1; i <= 10; i++) {
    console.log(`Creating Product Card ${i}`);

    productsContainer.innerHTML += `
        <div class="card">
            <h2>${productName}</h2>
            <p><strong>Price:</strong> ₹${price}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Product No:</strong> ${i}</p>
        </div>
        `;
  }

  console.log(`Total Products Generated: 10`);
});

//const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {

    // Clear Input Fields
    document.getElementById("productName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";
    document.getElementById("quantity").value = "";

    // Remove All Product Cards
    document.getElementById("products").innerHTML = "";

    // Optional: Clear Browser Console
    console.clear();

    console.log("Catalog Reset Successfully!");

});
