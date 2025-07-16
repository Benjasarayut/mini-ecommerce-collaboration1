document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('searchInput');
    const loader = document.getElementById('loader');
    let allProducts = [];

    // Updated products data with real images
    const productsData = [
        {"id": 1, "name": "Classic T-Shirt", "price": 499, "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80"},
        {"id": 2, "name": "Running Shoes", "price": 1200, "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"},
        {"id": 3, "name": "Smart Watch", "price": 3500, "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80"},
        {"id": 4, "name": "Denim Jeans", "price": 990, "image": "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=500&q=80"},
        {"id": 5, "name": "Leather Backpack", "price": 1850, "image": "https://images.unsplash.com/photo-1561126135-b7a5dfadace6?q=80&w=500"},
        {"id": 6, "name": "Sunglasses", "price": 750, "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80"}
    ];

    // Function to format price with comma separator
    function formatPrice(price) {
        return price.toLocaleString('th-TH');
    }

    // Simulate fetching products with loading state
    function loadProducts() {
        // Show loader
        loader.style.display = 'block';
        productList.style.display = 'none';
        
        // Simulate API call delay
        setTimeout(() => {
            allProducts = productsData;
            displayProducts(allProducts);
            
            // Hide loader and show products
            loader.style.display = 'none';
            productList.style.display = 'flex';
        }, 1500); // 1.5 second delay
    }

    function displayProducts(products) {
        productList.innerHTML = ''; // Clear previous list
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>ราคา: ${formatPrice(product.price)} บาท</p>
            `;
            productList.appendChild(card);
        });
    }

    // Search functionality
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = allProducts.filter(product => {
            return product.name.toLowerCase().includes(searchTerm);
        });
        displayProducts(filteredProducts);
    });

    // Initialize app
    loadProducts();
});