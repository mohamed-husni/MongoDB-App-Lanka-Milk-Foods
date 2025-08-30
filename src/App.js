import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddEmployee from './components/Employees/AddEmployee';
import EditEmployee from './components/Employees/EditEmployee';
import EmployeeDetails from './components/Employees/EmployeeDetails';
import EmployeeList from './components/Employees/EmployeeList';
import Home from './components/Home';
import DistributionList from './components/Distributions/DistributionList'; 
import AddDistributions from './components/Distributions/AddDistributions';
import DistributionsDetails from './components/Distributions/DistributionsDetails';
import EditDistributions from './components/Distributions/EditDistributions';
import ProductList from './components/Products/ProductList'; 
import AddProduct from './components/Products/AddProduct';
import ProductDetail from './components/Products/ProductDetails';
import EditProduct from './components/Products/EditProduct';
// import { Link } from 'react-router-dom';

const App = () => {

 
  return (
  
    <Router>
    <NavBar/>
      <Routes>
        <Route path="/navbar" element={<NavBar/>}/>
        <Route path="/" element={<Home />} /> 
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/distributions" element={<DistributionList/>}/>
        <Route path="/distributions/add" element={<AddDistributions/>}/>
        <Route path="/distributions/:id" element={<DistributionsDetails/>}/>
        <Route path="/distributions/edit/:id" element={<EditDistributions/>}/>
        <Route path="/employees/add" element={<AddEmployee />} />
        <Route path="/employees/edit/:id" element={<EditEmployee />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
   
  );
};

export default App;
