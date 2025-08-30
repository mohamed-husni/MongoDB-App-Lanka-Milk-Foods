import React from 'react';
import img from '../img/logo.jpg';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div
        // className="bg-cover bg-center h-96"
        // style={{ backgroundImage: 'url("https://your-image-url.com/hero-image.jpg")' }}
      >
        <img  src={img} alt="logo"></img>
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Lanka Milk Foods</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        {/* Welcome Section */}
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold">Welcome to Lanka Milk Foods</h2>
          <p className="mt-4 text-lg">One-stop solution for quality dairy products .</p>
          <p className="mt-4 text-lg">
            At Lanka Milk Foods, we are dedicated to providing the highest quality dairy products to our customers. Our commitment to excellence and innovation ensures that you receive the best products every time. Join us in our journey to bring the finest dairy products to your table.
          </p>
        </div>

        {/* Database Management Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Link to="/employees"className='card' >
            <h3 className="text-2xl font-bold">employee Management</h3>
            <p className="mt-4 text-gray-600">
              Our new database system allows us to track and manage all employees seamlessly.
            </p>
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Link to="/products"className='card' >
            <h3 className="text-2xl font-bold">Product Details</h3>
            <p className="mt-4 text-gray-600">
              We offer real-time updates on product stocks, ensuring timely restocking and product availability for our customers.
            </p>
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Link to="/distributions"className='card' >
            <h3 className="text-2xl font-bold">Distribution Details</h3>
            <p className="mt-4 text-gray-600">
              With enhanced database analytics, we provide insights on distribution hubs and activities seamlessly.
            </p>
            </Link>
          </div>
          
        </div>
        
        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold">Contact Us for Support</h3>
          <p className="mt-4 text-lg">Need assistance with database management? Reach out to our support team for any inquiries.</p>
        </div>
      </div>

     
    </div>
  );
};

export default Home;
