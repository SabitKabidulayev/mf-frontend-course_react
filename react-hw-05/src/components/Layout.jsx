import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import './Layout.css';

const Layout = () => (
  <div className="layout">
    <header>
      <h1>My App</h1>
      <Navbar />
      <ThemeToggle />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <p>&copy; 2024 My App</p>
    </footer>
  </div>
);

export default Layout;