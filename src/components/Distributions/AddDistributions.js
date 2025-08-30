import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddDistributions = () => {
  const navigate = useNavigate();

  // State for new distribution data
  const [distribution, setDistribution] = useState({
    location: '',
    date: '',
    products: [{ product_name: '', quantity: '' }], // Handle as an array
    total_quantity: '', // Capture total quantity for backend
    employeeID: '',
  });

  const [error, setError] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDistribution({ ...distribution, [name]: value });
  };

  // Handle product input changes (for product array)
  const handleProductChange = (index, e) => {
    const { name, value } = e.target;
    const products = [...distribution.products];
    products[index][name] = value;
    setDistribution({ ...distribution, products });
  };

  // Add a product row dynamically
  const addProduct = () => {
    setDistribution({
      ...distribution,
      products: [...distribution.products, { product_name: '', quantity: '' }],
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add total quantity from products array
      const totalQuantity = distribution.products.reduce((acc, product) => acc + parseInt(product.quantity || 0), 0);
      const payload = { ...distribution, total_quantity: totalQuantity };

      // Make POST request to add the new distribution
      await axios.post('http://localhost:5000/api/distributions', payload);
      alert('Distribution added successfully!');
      navigate('/distributions'); // Redirect to distribution list
    } catch (err) {
      setError('Error adding distribution. Please try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Add New Distribution</h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Location Field */}
        <div>
          <label className="block text-gray-700">Location:</label>
          <input
            type="text"
            name="location"
            value={distribution.location}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Date Field */}
        <div>
          <label className="block text-gray-700">Date:</label>
          <input
            type="date"
            name="date"
            value={distribution.date}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Products Fields */}
        {distribution.products.map((product, index) => (
          <div key={index}>
            <label className="block text-gray-700">Product {index + 1}:</label>
            <input
              type="text"
              name="product_name"
              value={product.product_name}
              onChange={(e) => handleProductChange(index, e)}
              placeholder="Product Name"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={(e) => handleProductChange(index, e)}
              placeholder="Quantity"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        ))}
        <button type="button" onClick={addProduct} className="text-blue-500 mt-2">
          Add Another Product
        </button>

        {/* Employee ID Field */}
        <div>
          <label className="block text-gray-700">Employee ID:</label>
          <input
            type="text"
            name="employeeID"
            value={distribution.employeeID}
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
            Add Distribution
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDistributions;
