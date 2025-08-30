import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();

  // State for new product data
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    expirationDate: '',
    supplier: '',
  });

  const [error, setError] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to add the new product
      await axios.post('http://localhost:5000/api/products', product);
      alert('Product added successfully!');
      navigate('/products'); // Redirect to product list
    } catch (err) {
      setError('Error adding product. Please try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Add New Product</h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Category Field */}
        <div>
          <label className="block text-gray-700">Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Stock Field */}
        <div>
          <label className="block text-gray-700">Stock:</label>
          <input
            type="text"
            name="stock"
            value={product.stock}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Price Field */}
        <div>
          <label className="block text-gray-700">Price:</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Expiration Date Field */}
        <div>
          <label className="block text-gray-700">Expiration Date:</label>
          <input
            type="date"
            name="expirationDate"
            value={product.expirationDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Supplier Field */}
        <div>
          <label className="block text-gray-700">Supplier:</label>
          <input
            type="text"
            name="supplier"
            value={product.supplier}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
