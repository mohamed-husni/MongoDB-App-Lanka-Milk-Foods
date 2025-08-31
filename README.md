# Lanka Milk Foods – MongoDB Application

This is a full-stack web application developed for **Lanka Milk Foods (LMF)** to manage **employees, products, and distribution** using **MongoDB** as the primary database.  

The project demonstrates **CRUD operations**, **data modeling**, and **React-based UI**, making it easy to manage organizational data.

---

## 🚀 Features
- **Employee Management**: Add, update, delete, and view employees  
- **Product Management**: Manage dairy products manufactured by LMF  
- **Distribution Hubs**: Track which hubs deliver to how many shops, with product/quantity details  
- **Search & Filter**: Quickly find employees, products, or hubs  
- **User-Friendly UI**: Built with React and Tailwind CSS  

---

## 🛠️ Tech Stack
- **Frontend**: React + Tailwind CSS  
- **Backend**: Node.js + Express  
- **Database**: MongoDB (with MongoDB Compass for management)  
- **Deployment**: Localhost / MongoDB Atlas (cloud option)  

---

## 📂 Project Structure
lmf-mongodb-app/
├─ backend/ # Node.js + Express API
│ ├─ models/ # Mongoose schemas (Employee, Product, Distribution)
│ ├─ routes/ # CRUD routes
│ ├─ server.js # Express server
│
├─ frontend/ # React application
│ ├─ src/
│ │ ├─ components/ # UI components
│ │ ├─ pages/ # Employee, Product, Distribution pages
│ │ └─ App.js
│
├─ .env.example # Example environment variables
└─ README.md

🗄️ MongoDB Collections
Employees: Employee details (name, role, location)

Products: Dairy products manufactured by LMF

Distributions: Hubs, connected shops, product quantities

