import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DistributionList = () => {
  const [distributions, setDistributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDistributions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/distributions');
        setDistributions(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDistributions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/distributions/${id}`);
      alert('Distribution deleted!');
      setDistributions(distributions.filter(distribution => distribution._id !== id)); // Remove from UI after deletion
    } catch (error) {
      alert('Error deleting Distribution');
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Distributions List</h1>
      <ul className="space-y-4">
      <Link
        to="/distributions/add"
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Add New Distribution
      </Link>
        {distributions.map((distribution) => (
          <li key={distribution._id} className="p-4 border rounded-lg hover:bg-gray-100 transition duration-300">
            <Link to={`/distributions/${distribution._id}`} className="text-blue-500 hover:underline">
              {distribution.location}
            </Link>
            {' | '}
            <Link to={`/distributions/edit/${distribution._id}`} className="text-green-500 hover:underline">
              Edit
            </Link>
            {' | '}
            <button
              onClick={() => handleDelete(distribution._id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default DistributionList;
