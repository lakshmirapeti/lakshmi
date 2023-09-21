function showMenuContent(category) {
  const menuContent = $('.product-list');
  menuContent.empty();

  $.ajax({
    url: `https://fakestoreapi.com/products/category/${category}`,
    method: 'GET',
    success: function (products) {
      // Split products into columns
      const columns = 3;
      const columnSize = Math.ceil(products.length / columns);

      // Create columns
      for (let i = 0; i < columns; i++) {
        const column = $('<ul class="column"></ul>');

        // Add products to the column
        for (let j = i * columnSize; j < (i + 1) * columnSize && j < products.length; j++) {
          const product = products[j];
          column.append(`
            <li>
              <img class="product-img" src="${product.image}" alt="${product.title}">
              <h3 class="product-name">${product.title}</h3>
              <p class="product-price">$${product.price}</p>
              <p class="product-description">${product.description}</p>
            </li>
          `);
        }

        menuContent.append(column);
      }
    },
    error: function (error) {
      console.log('Error fetching products:', error);
    }
  });
}
