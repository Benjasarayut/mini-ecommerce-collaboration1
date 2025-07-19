document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('searchInput');
    const loader = document.getElementById('loader');
    let allProducts = [];

    // Updated products data with real images
    const productsData = [
    {"id": 1, "name": "Palm Angels Bear Short-Sleeve Tee 'White'", "price": 9900, "image": "https://d2cva83hdk3bwc.cloudfront.net/palm-angels-bear-classic-tee-blackbrown-1-n.jpg"},
    {"id": 2, "name": "Air Jordan 4 Retro 'White Cement'", "price": 7600, "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e3572013-f8c7-417a-80fc-f41816b4dad9/AIR+JORDAN+4+RETRO.png"},
    {"id": 3, "name": "Apple Watch Ultra 2", "price": 33900, "image": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXKF3ref_VW_34FR+watch-case-49-titanium-black-ultra2_VW_34FR+watch-face-49-milanese-ultra2_VW_34FR_GEO_TH_LANG_TH?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=YzIydmRRS2pDN0FSOWdJYkhNbERrbmpDV2hhem5qNnpDenFtKzI1OXdzWjRaeVR4RW9XWXhWVHRHeXZEa3AwcGZsNDErT2hQbWVmS0VCWlVweVY1UHJPZDFtOFdYdEpGc2pnVWxteWY3dWcxYjU0WFQ4WXdVdGhrWTJkV200SUlkdGprVXVnMHhnYVRMWVFRcHgwUTRIU1FsRUxNNVNDQkk4ZUl5QUdFZlFEMmFiRXE4YTdHOUNzeVhiUmVNZ0lpaGE5a21iNjNmZ25ST0hCamcvSkRsYSsrRkgrNTh4dE0zMDNvb3M4c251bzZyRDl1ckliV2czWWNPYkNjM1AyQg"},
    {"id": 4, "name": "Juste un Clou bracelet, small model", "price": 145000, "image": "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwbbe9ec73/images/large/8f24ac8fa8a851d8a41e253c824e72ec.png?sw=750&sh=750&sm=fit&sfrm=png"},
    {"id": 5, "name": "Prada Re-Nylon Messenger Bag", "price": 82000, "image": "https://www.prada.com/content/dam/pradabkg_products/2/2VD/2VD034/2DMHF0002/2VD034_2DMH_F0002_V_XOP_SLR.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"},
    {"id": 6, "name": "RAYBAN RB3447V 2509 47", "price": 4500, "image": "https://storage.googleapis.com/stateless-thevisionoptic-com/2025/03/8862b4ec-img_4665.webp"}
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
  productList.innerHTML = ''; // ล้างรายการก่อน

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-content">
        <h3>${product.name}</h3>
        <p class="description">สินค้าคุณภาพจากแบรนด์ดัง</p>
        <div class="product-footer">
          <div class="price">฿${formatPrice(product.price)}</div>
        </div>
      </div>
    `;

    productList.appendChild(card);
  });
}

    // Search functionality
    searchInput.addEventListener('keyup', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === '') {
    displayProducts(allProducts);
    return;
  }

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  if (filteredProducts.length > 0) {
    displayProducts(filteredProducts);
  } else {
    productList.innerHTML = `
      <p style="color: white; font-size: 18px; padding: 10px;">
        ไม่พบสินค้าที่ตรงกับคำว่า "<strong>${searchTerm}</strong>"
      </p>
    `;
  }
});

    // Initialize app
    loadProducts();
});