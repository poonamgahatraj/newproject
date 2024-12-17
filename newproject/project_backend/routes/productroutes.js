import express from 'express';
import db from '../db/connection.js';

const router = express.Router();

// POST route to add a product
router.post('/products', async (req, res) => {
  const { name, sku, price, retailer_name, imageurl } = req.body;

  if (!name || !sku || !price || !retailer_name || !imageurl) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const result = await db.execute(
      'INSERT INTO Product1 (name, sku, price, retailer_name, imageurl) VALUES (?, ?, ?, ?, ?)',
      [name, sku, price, retailer_name, imageurl]
    );

    const newProduct = {
      id: result.insertId, // Auto-generated ID
      name,
      sku,
      price,
      retailer_name,
      imageurl,
    };

    res.status(201).json({
      message: 'Product added successfully',
      product: newProduct,
    });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ message: 'Database error', error: err.message });
  }
});

// Default export of the router
export default router;
