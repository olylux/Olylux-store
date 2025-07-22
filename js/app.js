async function loadProducts() {
  const res = await fetch('/api/products');
  const prods = await res.json();
  const container = document.getElementById('product-list');
  prods.forEach(p => {
    const el = document.createElement('div');
    el.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <strong>₦${p.price}</strong><br>
      <a href="product.html?id=${p.id}">View</a>`;
    container.appendChild(el);
  });
}
loadProducts();
document.addEventListener('DOMContentLoaded', function () {
  fetch('data/products.json')
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById('product-list');
      products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>₦${product.price}</p>
          <button>Add to Cart</button>
        `;
        productList.appendChild(div);
      });
    });
});
