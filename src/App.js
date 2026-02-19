// App.js — Root component. Handles routing and layout switching
// between public site (with Header/Footer) and dashboard routes.

import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Shared layout
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

// Public pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Dashboard pages
import ClientDashboard from './components/dashboard/client/ClientDashboard';
import ClientAccount from './components/dashboard/client/ClientAccount';
import EmployeeDashboard from './components/dashboard/employee/EmployeeDashboard';

const DASHBOARD_ROUTES = ['/client-dashboard', '/employee-dashboard'];

function Layout() {
  const location = useLocation();
  const isDashboard = DASHBOARD_ROUTES.some(r => location.pathname.startsWith(r));

  return (
    <>
      {!isDashboard && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connect" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/client-dashboard/account" element={<ClientAccount />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}
