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
import BusinessProcessAutomation from './pages/BusinessProcessAutomation';
import PlatformAsCodePage from './pages/PlatformAsCode';
import CybersecurityAsAServicePage from './pages/Cybersecurity';
import ManagedNetworkServicesPage from './pages/ManagedNetwork';
import ITTechnologyTrainingPage from './pages/TecnologyTraining';
import TechnologyTransitionPage from './pages/TechnoogyTransition';
import ServiceTemplate from './pages/ServiceTemplate';
import EnterpriseSolutions from './pages/EnterprisesSolution';
// import Consulting from './pages/Consulting';



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
        <Route path="/services/platform-as-code" element={<Layout><PlatformAsCodePage /></Layout>} />
        <Route path="/services/business-process-automation" element={<Layout><BusinessProcessAutomation /> </Layout>} />
        <Route path="/services/cybersecurity" element={<Layout><CybersecurityAsAServicePage /></Layout>} />
        <Route path="/services/managed-network" element={<Layout><ManagedNetworkServicesPage /></Layout>} />
        <Route path="/services/it-training" element={<Layout><ITTechnologyTrainingPage /></Layout>} />
        <Route path="/services/technology-transitions" element={<Layout><TechnologyTransitionPage /> </Layout>} />
        <Route path="/services/enterprise-solutions" element={<Layout><EnterpriseSolutions /> </Layout>} />
        {/* <Route path="/services/it-consulting-services" element={<Layout><Consulting /> </Layout>} /> */}
      </Routes>
    </Router>
  );
}

export default App;