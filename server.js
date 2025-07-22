// server.js
const express = require('express');
const app = express();
const products = require('./data/products.json');

app.use(express.json());
app.use(express.static('public'));

// API: get all products
app.get('/api/products', (req, res) => res.json(products));

// API: get single product by id
app.get('/api/products/:id', (req, res) => {
  const prod = products.find(p => p.id === +req.params.id);
  if (prod) res.json(prod); else res.status(404).json({error: 'Not found'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
