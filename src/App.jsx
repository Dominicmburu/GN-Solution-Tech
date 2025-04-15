import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './assets/css/home.css';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import Services from './pages/services';
import NetworkAsCode from './pages/NetworkAsCode';
import InfrastructureAsCode from './pages/InfratsructureAsCode';
import SoftwareAsCodePage from './pages/SoftwareAsCodePage';
import BusinessProcessAutomation from './pages/BusinessProcessAutomation';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/aboutus" element={<Layout><AboutPage /></Layout>} />
        <Route path="/blogs" element={<Layout><BlogsPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/testimonials" element={<Layout><TestimonialsPage /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/services/network-as-code" element={<Layout><NetworkAsCode /></Layout>} />
        <Route path="/services/infrastructure-as-code" element={<Layout><InfrastructureAsCode /></Layout>} />
        <Route path="/services/software-as-code" element={<Layout><SoftwareAsCodePage /></Layout>} />
        <Route path="/services/business-process-automation" element={<Layout><BusinessProcessAutomation /> </Layout>} />

      </Routes>
    </Router>
  );
}

export default App;