document.addEventListener("DOMContentLoaded", () => {
    // Products array
    const products = [
        { id: 1, name: "Product 1", Price: 29 },
        { id: 2, name: "Product 2", Price: 30 },
        { id: 3, name: "Product 3", Price: 20 },
        { id: 4, name: "Product 4", Price: 15 },
    ];

    // Cart array
    const card = JSON.parse(localStorage.getItem("cartItems")) || []; // Load cart from localStorage or initialize empty

    // DOM Elements
    const productList = document.getElementById("productlist");
    const emptyCartMess = document.getElementById("empty-cart");
    const totalPriceDisp = document.getElementById("total-price");
    const cartTotal = document.getElementById("cart-total");
    const cartItems = document.getElementById("item");
    const removeBtn = document.getElementById("remove-btn");
    const totalproducts = document.getElementById("totalproducts");
    const checkoutBtn = document.getElementById("checkout-btn");

    // Display products
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add(
            "bg-gray-200",
            "flex",
            "justify-evenly",
            "items-center",
            "rounded-lg",
            "m-1",
            "p-2",
            "gap-3"
        );

        productDiv.innerHTML = `
            <span>${product.name} - $${product.Price.toFixed(2)}</span>
            <button class="bg-gray-900 border border-gray-700 text-gray-200 text-sm rounded-lg p-2 sm:m-2 m-2 focus:ring-2 focus:ring-blue-500 focus:outline-none hover:bg-blue-600 hover:text-white" data-id="${product.id}">Add to Cart</button>`;

        productList.appendChild(productDiv);
    });

    // Add event listener to product list
    productList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find((p) => p.id === productId);
            addToCart(product);
        }
    });

    // Add to cart function
    function addToCart(product) {
        card.push(product);
        saveCartToLocalStorage();
        renderCart();
    }

    // Render cart
    function renderCart() {
        cartItems.innerHTML = ""; // Clear previous cart content
        let totalPrice = 0;

        if (card.length > 0) {
            cartTotal.classList.remove("hidden");
            emptyCartMess.classList.add("hidden");

            card.forEach((item) => {
                totalPrice += item.Price;

                const cartItem = document.createElement("div");
                cartItem.innerHTML = `<h1 class="pb-3">${item.name} - $${item.Price.toFixed(2)}</h1>`;
                cartItems.appendChild(cartItem);

            });

            totalPriceDisp.textContent = `$${totalPrice.toFixed(2)} and totals products are ${card.length}`;
        } else {
            cartTotal.classList.add("hidden");
            emptyCartMess.classList.remove("hidden");
        }
    }

    // Save cart to localStorage
    function saveCartToLocalStorage() {
        localStorage.setItem("cartItems", JSON.stringify(card));
    }

    // Remove all items from cart
    removeBtn.addEventListener("click", () => {
        card.length = 0; // Clear the cart array
        saveCartToLocalStorage(); // Update localStorage
        renderCart(); // Update the UI
    });

    // Checkout button functionality
    checkoutBtn.addEventListener("click", () => {
        if (card.length > 0) {
            alert("Checkout successful!");
            card.length = 0; // Clear the cart
            saveCartToLocalStorage();
            renderCart();
        } else {
            alert("Your cart is empty!");
        }
    });

    // Load cart on page load
    renderCart();
});
