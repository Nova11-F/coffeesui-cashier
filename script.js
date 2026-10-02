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
    name: "Starwberry Cake",
    category: "cake",
    price: 25000,
    image:"img/cake.png"
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
