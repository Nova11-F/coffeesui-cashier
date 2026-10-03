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
    name: "English Breakfast Tea",
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

// Render Categories
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

function changeCategories(category) {
  const categoryButtons = document.querySelectorAll(".category-btn");

  categoryButtons.forEach((button) => {
    button.classList.remove("active");
  });

  const activeButton = document.querySelector(
    `.category-btn[data-category="${category}"]`,
  );

  activeButton.classList.add("active");

  if (category === "all") {
    renderProducts(products);
    return;
  }

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  renderProducts(filteredProducts);
}

renderCategories();


// Render Product
function renderProducts(productList) {
  const productContainer = document.getElementById("products");

  productContainer.innerHTML = "";

  productList.forEach(product => {

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

        <div class="product-order">

          <h4>Rp ${product.price.toLocaleString("id-ID")}</h4>

          <button 
            type="button"
            class="add-product"
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

renderProducts();
