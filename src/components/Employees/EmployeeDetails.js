// src/components/Employees/EmployeeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmployeeDetail = () => {
  const { id } = useParams(); // Get employee ID from the URL
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/employees/${id}`);
        setEmployee(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!employee) {
    return <div className="text-center text-gray-500">No employee found.</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 bg-center ">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Employee Details: {employee.name}</h1>
        <p className="text-gray-700"><strong>Position:</strong> {employee.position}</p>
        <p className="text-gray-700"><strong>Email:</strong> {employee.email}</p>
        <p className="text-gray-700"><strong>Phone:</strong> {employee.phone}</p>
        <p className="text-gray-700"><strong>Department:</strong> {employee.department}</p>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default EmployeeDetail;
