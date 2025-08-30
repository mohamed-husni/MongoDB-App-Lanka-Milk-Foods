// src/components/Employees/EmployeeList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`);
      alert('Employee deleted!');
      setEmployees(employees.filter(employee => employee._id !== id)); // Remove from UI after deletion
    } catch (error) {
      alert('Error deleting employee');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Employee List</h1>
      <ul className="space-y-4">
      <Link to="/employees/add" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add New Employee</Link>
        {employees.map((employee) => (
          <li key={employee._id} className="p-4 border rounded-lg hover:bg-gray-100">
            <Link to={`/employees/${employee._id}`} className="text-blue-500 hover:underline">{employee.name}</Link>
            {' | '}
            <Link to={`/employees/edit/${employee._id}`} className="text-green-500 hover:underline">Edit</Link>
            {' | '}
            <button onClick={() => handleDelete(employee._id)} className="text-red-500 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default EmployeeList;
