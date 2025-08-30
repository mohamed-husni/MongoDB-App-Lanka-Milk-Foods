import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const navigate = useNavigate();

  // State for new employee data
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    department: '',
    salary: '',      // Added salary field
    address: '',     // Added address field
    email: '',
    phone: '',
    hireDate: '',
  });

  const [error, setError] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to add the new employee
      await axios.post('http://localhost:5000/api/employees', employee);
      alert('Employee added successfully!');
      navigate('/employees'); // Redirect to employee list
    } catch (err) {
      console.error(err); // Log actual error
      setError('Error adding employee. Please try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Add New Employee</h1>
      
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Position Field */}
        <div>
          <label className="block text-gray-700">Position:</label>
          <input
            type="text"
            name="position"
            value={employee.position}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Department Field */}
        <div>
          <label className="block text-gray-700">Department:</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Salary Field */}
        <div>
          <label className="block text-gray-700">Salary:</label>
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address Field */}
        <div>
          <label className="block text-gray-700">Address:</label>
          <input
            type="text"
            name="address"
            value={employee.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-gray-700">Phone:</label>
          <input
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Hire Date Field */}
        <div>
          <label className="block text-gray-700">Hire Date:</label>
          <input
            type="date"
            name="hireDate"
            value={employee.hireDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
