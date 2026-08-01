const addBtn = document.getElementById("addBtn");
const showBtn = document.getElementById("showBtn");
const clearBtn = document.getElementById("clearBtn");
const cartItems = document.getElementById("cartItems");

const productNames = [];
const productPrices = [];

function addProduct() {
  const productName = document.getElementById("productName").value.trim();
  const price = Number(document.getElementById("price").value);

  if (productName === "" || price <= 0) {
    alert("Please enter valid product details.");
    return;
  }

  productNames.push(productName);
  productPrices.push(price);

  console.log("Product Added Successfully");
  console.table({
    Product: productName,
    Price: price,
  });

  document.getElementById("productName").value = "";
  document.getElementById("price").value = "";

  showCart();
}

function showCart() {
  cartItems.innerHTML = "";

  if (productNames.length === 0) {
    cartItems.innerHTML = "<p>No Products Added</p>";
    return;
  }

  for (let i = 0; i < productNames.length; i++) {
    cartItems.innerHTML += `
      <div class="item">
        <h3>${productNames[i]}</h3>
        <p><strong>Price:</strong> ₹${productPrices[i].toLocaleString()}</p>
      </div>
    `;
  }

  console.log("SHOPPING CART");
  console.log(productNames);
  console.log(productPrices);
}

function clearCart() {
  productNames.length = 0;
  productPrices.length = 0;

  cartItems.innerHTML = "<p>No Products Added</p>";

  document.getElementById("productName").value = "";
  document.getElementById("price").value = "";

  console.clear();
  console.log("Cart Cleared Successfully");
}

addBtn.addEventListener("click", addProduct);
showBtn.addEventListener("click", showCart);
clearBtn.addEventListener("click", clearCart);
