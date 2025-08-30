import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DistributionsDetails = () => {
  const { id } = useParams();
  const [distribution, setDistribution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDistributionsDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/distributions/${id}`);
        setDistribution(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDistributionsDetails();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="text-xl font-semibold">Loading...</div>
    </div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">
      <div className="text-xl font-semibold text-red-500">Error: {error}</div>
    </div>;
  }

  if (!distribution) {
    return <div className="flex justify-center items-center h-screen">
      <div className="text-xl font-semibold">No Distribution Details found.</div>
    </div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 bg-center ">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Distribution Details: {distribution.location}</h1>
      <div className="space-y-2">
        <p><strong>Quantity:</strong> {distribution.quantity}</p>
        <p><strong>Products:</strong> {distribution.products}</p>
        <p><strong>Date:</strong> {distribution.date}</p>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default DistributionsDetails;
