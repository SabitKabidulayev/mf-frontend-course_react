import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AboutUsProvider } from './context/AboutUsContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AboutUsProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<User />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AboutUsProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);