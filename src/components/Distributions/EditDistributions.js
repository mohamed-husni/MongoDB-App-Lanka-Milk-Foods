import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditDistribution = () => {
  const { id } = useParams(); // Get employee id from URL
  const navigate = useNavigate();
  const [distribution, setDistribution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDistribution = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/distributions/${id}`);
        setDistribution(response.data); // Set the employee data
      } catch (err) {
        setError('Error fetching distributions data');
      } finally {
        setLoading(false);
      }
    };

    fetchDistribution();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDistribution({ ...distribution, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/distributions/${id}`, distribution);
      alert('Distributions updated successfully!');
      navigate('/distribution');
    } catch (err) {
      alert('Error updating distributions');
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!distribution) return <div className="text-center mt-10">Distributions not found</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Distributions</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Location:</label>
            <input
              type="text"
              name="location"
              value={distribution?.location || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date:</label>
            <input
              type="text"
              name="date"
              value={distribution?.date || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Quantity:</label>
            <input
              type="text"
              name="quantity"
              value={distribution?.quantity || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Update Distributions
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditDistribution;
