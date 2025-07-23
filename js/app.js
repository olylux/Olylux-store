document.addEventListener('DOMContentLoaded', function () {
  fetch('data/products.json') // Make sure this path is correct
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById('product-list');
      productList.innerHTML = ''; // Clear old content

      products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
          <a href="product.html?id=${product.id}" style="text-decoration:none; color:inherit;">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₦${product.price.toLocaleString()}</p>
            <button>View Product</button>
          </a>
        `;
        productList.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Failed to load products:', error);
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000); // change slide every 4 seconds

function toggleMenu() {
  const menu = document.querySelector('.nav-menu ul');
  menu.classList.toggle('active');
}
