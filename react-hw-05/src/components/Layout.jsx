import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './Layout.css';

const Layout = () => (
  <div>
    <header>
      <h1>React - Homework 5</h1>
      <Navbar />
    </header>
    <div className="container">
      <main>
        <Outlet />
      </main>
    </div>
    <footer>
      <p>&copy; 2024 HW5</p>
    </footer>
  </div>
);

export default Layout;