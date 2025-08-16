document.addEventListener("DOMContentLoaded", function () {
  const app = document.querySelector(".app");
  let products = [];
  let page = 1;

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();

      if (data && data.products) {
        products = data.products;

        render();
      }
    } catch (error) {
      console.error("Error Fetching Products: ", error);
    }
  };

  const render = () => {
    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products");

    const pagination = document.createElement("div");
    pagination.classList.add("pagination");

    if (products.length > 0) {
      products.slice(page * 10 - 10, page * 10).forEach((prod) => {
        const productElement = document.createElement("div");
        productElement.classList.add("products__single");
        productElement.innerHTML = `
            <img src="${prod.thumbnail}" alt="${prod.title}"/>
            <span>${prod.title}</span>
        `;
        productsContainer.appendChild(productElement);
      });

      if (page > 1) {
        const prevButton = document.createElement("button");
        prevButton.textContent = "⏪";
        prevButton.dataset.page = page - 1;
        pagination.appendChild(prevButton);
      }

      // Display Numbers Buttons
      for (let i = 0; i < products.length / 10; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i + 1;
        pageButton.dataset.page = i + 1;
        if (page === i + 1) {
          pageButton.classList.add("pagination_selected");
        }
        pagination.appendChild(pageButton);
      }

      if (page < products.length / 10) {
        const nextButton = document.createElement("button");
        nextButton.textContent = "⏩";
        nextButton.dataset.page = page + 1;
        pagination.appendChild(nextButton);
      }
    }

    app.innerHTML = "";
    app.appendChild(productsContainer);
    app.appendChild(pagination);

    pagination.addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        const selectedPage = Number(event.target.dataset.page);
        selectPageHandler(selectedPage);
      }
    });
  };

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      page = selectedPage;
      render();
    }
  };

  fetchProducts();
});
