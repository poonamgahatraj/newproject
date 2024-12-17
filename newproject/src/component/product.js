import React, { useState } from "react";
import axios from 'axios';

export default function Product(){

    const [formData, setFormData] = useState({
        name: "",
        sku: "",
        price: "",
        retailer_name: "",
        imageurl: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
      
        try {
          const response = await axios.post('http://localhost:3001/api/products', formData);
          console.log('Product added:', response.data);
        } catch (error) {
          console.error('Error adding product:', error);
          // Log more details to understand the error
          console.error('Error details:', error.response ? error.response.data : error.message);
          alert('Error: ' + (error.response?.data?.message || error.message));
        }
      };
      
      
    return(
        <>
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>SKU:</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Retailer Name:</label>
          <input
            type="text"
            name="retailer_name"
            value={formData.retailer_name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageurl"
            value={formData.imageurl}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Post
        </button>
      </form>
    </div>
        </>
    )
}