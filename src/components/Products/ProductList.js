import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      alert('Product deleted!');
      setProducts(products.filter(product => product._id !== id)); // Remove from UI after deletion
    } catch (error) {
      alert('Error deleting product');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-center">Product List</h1>
      <ul className="space-y-4">
      <Link to="/products/add" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 max-w-24 items-center">Add New Product</Link>
        {products.map((product) => (
          <li key={product._id} className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            <Link to={`/products/${product._id}`} className="text-blue-500 hover:underline">{product.name}</Link>
            <div className="mt-2">
              <Link to={`/products/edit/${product._id}`} className="text-green-500 hover:underline mr-4">Edit</Link>
              <button onClick={() => handleDelete(product._id)} className="text-red-500 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        
      </div>
    </div>
  );
};

export default ProductList;
