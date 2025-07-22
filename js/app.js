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
