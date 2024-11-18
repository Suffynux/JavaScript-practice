document.addEventListener("DOMContentLoaded" , () => {
    // products array 
    const products = [
        {id : 1, name : "Product 1", Price : 29},
        {id : 2, name : "Product 2", Price : 30},
        {id : 3, name : "Product 3", Price : 20},
        {id : 4, name : "Product 4", Price : 15},
    ]
    // Making an empty array so whenever add the product to card we will push the product into this card 
    const card = []

    let productList = document.getElementById("productlist");
    let emptyCartMess = document.getElementById("empty-cart");
    let totalPriceDisp = document.getElementById("total-price");
    let cartTotal = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");

// In this way we can add the foreach loop to our array to display it to the Screen document
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add(
            'bg-gray-200',
            'flex',
            'justify-evenly',
            'align-items',
            'rounded-lg',
            'm-1',
            'p-2',
            'items-center',
            'gap-3'
        )
        // This way we can add the Inner Html to the div we created for products
        productDiv.innerHTML = 
        `<span>${product.name} - $${product.Price.toFixed(2)}</span>
        <button class="bg-gray-900 border border-gray-700 text-gray-200 text-sm rounded-lg p-2 sm:m-2 m-2 focus:ring-2 focus:ring-blue-500 focus:outline-none hover:bg-blue-600 hover:text-white" id="checkout-btn" data-id= "${product.id}">Add to Cart</button>`;

        productList.appendChild(productDiv);


    })

} );