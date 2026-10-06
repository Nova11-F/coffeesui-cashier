window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 2000);
});

// data categories
const categories = [
  "all",
  "coffee",
  "non-coffee",
  "tea",
  "cake",
  "pastry",
  "sandwich",
  "snack",
];

// Product
const products = [
  // ==================== COFFEE ====================
  {
    id: 1,
    name: "Americano",
    category: "coffee",
    price: 15000,
    image: "img/coffee.png",
  },
  {
    id: 2,
    name: "Latte",
    category: "coffee",
    price: 20000,
    image: "img/coffee.png",
  },
  {
    id: 3,
    name: "Cappuccino",
    category: "coffee",
    price: 20000,
    image: "img/coffee.png",
  },
  {
    id: 4,
    name: "Mocha",
    category: "coffee",
    price: 22000,
    image: "img/coffee.png",
  },
  {
    id: 5,
    name: "Caramel Macchiato",
    category: "coffee",
    price: 24000,
    image: "img/coffee.png",
  },
  {
    id: 6,
    name: "Spanish Latte",
    category: "coffee",
    price: 23000,
    image: "img/coffee.png",
  },
  {
    id: 7,
    name: "Kopi Susu Gula Aren",
    category: "coffee",
    price: 18000,
    image: "img/coffee.png",
  },
  {
    id: 8,
    name: "Hazelnut Latte",
    category: "coffee",
    price: 23000,
    image: "img/coffee.png",
  },

  // ==================== NON-COFFEE ====================
  {
    id: 9,
    name: "Chocolate",
    category: "non-coffee",
    price: 18000,
    image: "img/matcha.png",
  },
  {
    id: 10,
    name: "Matcha Latte",
    category: "non-coffee",
    price: 22000,
    image: "img/matcha.png",
  },
  {
    id: 11,
    name: "Taro Latte",
    category: "non-coffee",
    price: 20000,
    image: "img/matcha.png",
  },
  {
    id: 12,
    name: "Strawberry Milk",
    category: "non-coffee",
    price: 20000,
    image: "img/matcha.png",
  },
  {
    id: 13,
    name: "Cookies & Cream",
    category: "non-coffee",
    price: 22000,
    image: "img/matcha.png",
  },
  {
    id: 14,
    name: "Red Velvet Latte",
    category: "non-coffee",
    price: 22000,
    image: "img/matcha.png",
  },

  // ==================== TEA ====================
  {
    id: 15,
    name: " Tea",
    category: "tea",
    price: 12000,
    image: "img/tea.png",
  },
  {
    id: 16,
    name: "Earl Grey Tea",
    category: "tea",
    price: 14000,
    image: "img/tea.png",
  },
  {
    id: 17,
    name: "Iced Lemon Tea",
    category: "tea",
    price: 15000,
    image: "img/tea.png",
  },
  {
    id: 18,
    name: "Peach Tea",
    category: "tea",
    price: 17000,
    image: "img/tea.png",
  },
  {
    id: 19,
    name: "Lychee Tea",
    category: "tea",
    price: 17000,
    image: "img/tea.png",
  },
  {
    id: 20,
    name: "Honey Lemon Tea",
    category: "tea",
    price: 18000,
    image: "img/tea.png",
  },

  // ==================== PASTRY ====================
  {
    id: 21,
    name: "Croissant",
    category: "pastry",
    price: 18000,
    image: "img/pastry.png",
  },
  {
    id: 22,
    name: "Chocolate Croissant",
    category: "pastry",
    price: 20000,
    image: "img/pastry.png",
  },
  {
    id: 23,
    name: "Almond Croissant",
    category: "pastry",
    price: 22000,
    image: "img/pastry.png",
  },
  {
    id: 24,
    name: "Cinnamon Roll",
    category: "pastry",
    price: 20000,
    image: "img/pastry.png",
  },
  {
    id: 25,
    name: "Croffle",
    category: "pastry",
    price: 18000,
    image: "img/pastry.png",
  },
  {
    id: 26,
    name: "Cheese Danish",
    category: "pastry",
    price: 20000,
    image: "img/pastry.png",
  },

  // ==================== CAKE ====================
  {
    id: 27,
    name: "Strawberry Cake",
    category: "cake",
    price: 25000,
    image: "img/cake.png",
  },
  {
    id: 28,
    name: "Chocolate Cake",
    category: "cake",
    price: 25000,
    image: "img/cake.png",
  },
  {
    id: 29,
    name: "Red Velvet Cake",
    category: "cake",
    price: 27000,
    image: "img/cake.png",
  },
  {
    id: 30,
    name: "Cheesecake",
    category: "cake",
    price: 28000,
    image: "img/cake.png",
  },
  {
    id: 31,
    name: "Tiramisu",
    category: "cake",
    price: 28000,
    image: "img/cake.png",
  },
  {
    id: 32,
    name: "Brownies",
    category: "cake",
    price: 20000,
    image: "img/cake.png",
  },

  // ==================== SANDWICH ====================
  {
    id: 33,
    name: "Chicken Sandwich",
    category: "sandwich",
    price: 25000,
    image: "img/sandwich.png",
  },
  {
    id: 34,
    name: "Tuna Sandwich",
    category: "sandwich",
    price: 24000,
    image: "img/sandwich.png",
  },
  {
    id: 35,
    name: "Ham & Cheese Sandwich",
    category: "sandwich",
    price: 26000,
    image: "img/sandwich.png",
  },
  {
    id: 36,
    name: "Club Sandwich",
    category: "sandwich",
    price: 30000,
    image: "img/sandwich.png",
  },
  {
    id: 37,
    name: "Grilled Cheese",
    category: "sandwich",
    price: 22000,
    image: "img/sandwich.png",
  },
  {
    id: 38,
    name: "Tuna Melt",
    category: "sandwich",
    price: 27000,
    image: "img/sandwich.png",
  },

  // ==================== SNACK ====================
  {
    id: 39,
    name: "French Fries",
    category: "snack",
    price: 18000,
    image: "img/snacks.png",
  },
  {
    id: 40,
    name: "Cheese Fries",
    category: "snack",
    price: 22000,
    image: "img/snacks.png",
  },
  {
    id: 41,
    name: "Chicken Nuggets",
    category: "snack",
    price: 20000,
    image: "img/snacks.png",
  },
  {
    id: 42,
    name: "Onion Rings",
    category: "snack",
    price: 18000,
    image: "img/snacks.png",
  },
  {
    id: 43,
    name: "Mozzarella Sticks",
    category: "snack",
    price: 22000,
    image: "img/snacks.png",
  },
  {
    id: 44,
    name: "Nachos",
    category: "snack",
    price: 23000,
    image: "img/snacks.png",
  },
];

// Category & Search Box
function getCategoryCount(category) {
  if (category === "all") {
    return products.length;
  }

  return products.filter((product) => product.category === category).length;
}

function renderCategories() {
  const categoryContainer = document.getElementById("categories");

  categoryContainer.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");

    button.classList.add("category-btn");

    if (category === "all") {
      button.classList.add("active");
    }

    button.dataset.category = category;

    const categoryName =
      category === "all"
        ? "All"
        : category
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    const count = getCategoryCount(category);

    button.innerHTML = `
      ${categoryName}

      <span class="categories-item">
        ${count}
      </span>
    `;

    button.addEventListener("click", () => {
      changeCategories(category);
    });

    categoryContainer.appendChild(button);
  });
}

let currentCategory = "all";
let searchQuery = "";

// Filter Products
function getFilteredProducts() {
  return products.filter((product) => {
    const matchCategory =
      currentCategory === "all" ||
      product.category.toLowerCase() === currentCategory.toLowerCase();

    const matchSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });
}

// Render Filtered Products
function renderFilteredProducts() {
  const filteredProducts = getFilteredProducts();

  const productList = document.getElementById("products");

  // Jika tidak ada produk
  if (filteredProducts.length === 0) {
    productList.innerHTML = `
      <div class="product-not-found">
        <div class="not-found-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search preview-icon"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
        </div>

        <h3>Produk tidak ditemukan</h3>

        <p>
          Maaf, produk yang kamu cari tidak tersedia.
        </p>

        <button type="button" id="reset-search">
          Tampilkan Semua Produk
        </button>
      </div>
    `;

    // Tombol untuk kembali menampilkan semua produk
    document.getElementById("reset-search").addEventListener("click", () => {
      currentCategory = "all";
      searchQuery = "";

      searchInput.value = "";

      document.querySelectorAll(".category-btn").forEach((button) => {
        button.classList.remove("active");
      });

      document
        .querySelector('.category-btn[data-category="all"]')
        ?.classList.add("active");

      renderFilteredProducts();
    });

    return;
  }

  renderProducts(filteredProducts);
}

// Change Category
function changeCategories(category) {
  const categoryButtons = document.querySelectorAll(".category-btn");

  categoryButtons.forEach((button) => {
    button.classList.remove("active");
  });

  const activeButton = document.querySelector(
    `.category-btn[data-category="${category}"]`,
  );

  if (activeButton) {
    activeButton.classList.add("active");
  }

  currentCategory = category;

  renderFilteredProducts();
}

// Search Box
const productList = document.getElementById("products");

const searchInput = document.getElementById("search-input");

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    searchQuery = event.target.value;

    renderFilteredProducts();
  });
}

renderCategories();
renderFilteredProducts();

// Render Product
function renderProducts(productList) {
  const productContainer = document.getElementById("products");

  productContainer.innerHTML = "";

  productList.forEach((product) => {
    const productItem = document.createElement("div");

    productItem.classList.add("product-item");

    productItem.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.name}"
        class="product-image"
      >

      <div class="product-info">

        <h3>${product.name}</h3>
        <p>${product.category}</p>

        <div class="product-order">

          <h4>Rp ${product.price.toLocaleString("id-ID")}</h4>

          <button 
            type="button"
            class="add-product"
            id="add-Cart"
            data-id="${product.id}"
          >
            +
          </button>

        </div>

      </div>
    `;

    productContainer.appendChild(productItem);
  });
}

renderProducts(products);

let cart = [];

function addToCart(productId){
  const productCart = products.find((product) => product.id === productId);

  const cartItems = cart.find((item) => item.id === productId);

  if (cartItems) {
    cartItems.quantity += 1;
  }else{
    cart.push({...productCart,
      quantity: 1
    });
  }
  
  renderCart();
}

document.addEventListener("click", (e) => {
  if(e.target.classList.contains("add-product")){
    
    const productId = Number(e.target.dataset.id);

    addToCart(productId)
  }
})

function decreaseQuantity(productId) {

  const cartItem = cart.find(
    item => item.id === productId
  );

  if (!cartItem) return;

  if (cartItem.quantity > 1) {

    cartItem.quantity -= 1;

  } else {

    const index = cart.findIndex(
      item => item.id === productId
    );

    cart.splice(index, 1);
  }

  renderCart();
}

document.addEventListener("click", function(event) {

  if (event.target.classList.contains("decrease-btn")) {

    const productId = Number(
      event.target.dataset.id
    );

    decreaseQuantity(productId);
  }

});

function renderCart() {
  const cartContainer = document.getElementById("cart");

  cartContainer.innerHTML="";

  let subTotal = 0;

cart.forEach((item) => {
  subTotal += item.price * item.quantity;
});

const tax = subTotal * 0.10;

const totalHarga = subTotal + tax;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="cart-no-item">

        <div class="cart-header">
          <h2>Order Details</h2>
          <p>${cart.length} item</p>
        </div>

        <div class="cart-no-item-detail">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-plus preview-icon"><path d="M16 5h6"/><path d="M19 2v6"/><path d="m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18"/><path d="M4.564 5H12"/><path d="M6.25 14h12.712a2 2 0 001.991-1.57l.172-1.041"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>
          <h3>Belum Ada Pesanan</h3>
          <p>
            Klik atau pilih produk untuk menambahkan ke daftar.
          </p>
        </div>

        <div class="cart-footer">
          ...
        </div>

      </div>
    `;

    return;
  }


  cartContainer.innerHTML = `
    <div class="cart-header">
      <h2>Order Details</h2>
      <p>${cart.length} item</p>
    </div>

    <div class="cart-items"></div>

    <div class="cart-footer">
      <div class="cart-total">

        <div class="cart-total-detail">

          <div>
            <p>Subtotal</p>
            <p id="subtotal">Rp ${subTotal.toLocaleString("id-ID")}</p>
          </div>

          <div>
            <p>Tax (10%)</p>
            <p id="pajak">Rp ${tax.toLocaleString("id-ID")}</p>
          </div>

        </div>

        <div class="cart-total-harga">
          <p>Total</p>
          <p id="total-price" class="total-price">
            Rp ${totalHarga.toLocaleString("id-ID")}
          </p>
        </div>

      </div>

      <div class="cart-button">
        <button id="checkout-btn" class="checkout-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card preview-icon"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><path d="M6 14h2"/></svg>
          Bayar sekarang
        </button>
      </div>
    </div>
  `;

  const cartItems = document.querySelector(".cart-items");

  cart.forEach((item) => {

    cartItems.innerHTML += `
      <div class="cart-item">

        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="cart-image"
        />

        <div class="item-info">
          <h3 class="cart-name">
            ${item.name}
          </h3>
          <p class="cart-price">
            Rp. ${item.price.toLocaleString("id-ID")}
          </p>
        </div>

        <div class="item-quantity">
          <button 
            class="decrease-btn"
            data-id="${item.id}"
          >
            -
          </button>
          <span class="quantity">
            ${item.quantity}
          </span>
          <button 
            class="add-product"
            data-id="${item.id}"
          >
            +
          </button>

        </div>

      </div>
    `;
  });
}

renderCart();
