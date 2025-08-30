// src/components/Employees/EmployeeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // Get employee ID from the URL
  const [Product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-red-500">Error: {error}</div>;
  }

  if (!Product) {
    return <div className="text-center mt-5">No employee found.</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 bg-center ">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Product Details: {Product.name}</h1>
        <p className="mb-2"><strong>Category:</strong> {Product.category}</p>
        <p className="mb-2"><strong>Stock:</strong> {Product.stock}</p>
        <p className="mb-2"><strong>Supplier Department:</strong> {Product.suppliar}</p>
        <p className="mb-2"><strong>Expiration Date:</strong> {Product.expairationDate}</p>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default ProductDetail;
