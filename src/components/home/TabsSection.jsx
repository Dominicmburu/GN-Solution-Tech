import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About GN Solutions' },
    { id: 'services', label: 'Our Services' },
    { id: 'why', label: 'Why Choose GN Solutions' },
  ];

  const tabContent = {
    about: {
      title: 'About GN Solutions',
      content: (
        <>
          <p className="mb-4">
            GN Solutions is a leading technology consultancy firm dedicated to helping businesses 
            transform their operations through innovative digital solutions. With over a decade of 
            experience, we've helped countless organizations across various industries streamline 
            their processes and achieve their business goals.
          </p>
          <p className="mb-4">
            Our team of experts combines deep technical knowledge with industry insights to deliver 
            customized solutions that address your unique challenges. We believe in building lasting 
            partnerships with our clients, understanding their needs, and growing together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Our Mission</h4>
              <p>To empower businesses with technology solutions that drive growth and innovation.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Our Vision</h4>
              <p>To be the most trusted technology partner for businesses seeking digital transformation.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Our Values</h4>
              <p>Innovation, Integrity, Excellence, and Client-Centricity guide everything we do.</p>
            </div>
          </div>
        </>
      ),
    },
    services: {
      title: 'Our Services',
      content: (
        <>
          <p className="mb-6">
            At GN Solutions, we offer a comprehensive range of technology services designed to 
            transform your business operations and drive growth. Our expert team delivers tailored 
            solutions that address your specific needs and challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Business Process Automation</h4>
              <p>Streamline your operations, reduce manual tasks, and improve efficiency with our custom automation solutions.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Custom Software Development</h4>
              <p>Get tailored software solutions designed specifically for your business needs and challenges.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Cloud Solutions</h4>
              <p>Leverage the power of cloud technology to enhance flexibility, scalability, and security for your business.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Digital Transformation</h4>
              <p>Evolve your business with comprehensive digital transformation strategies and implementation.</p>
            </div>
          </div>
        </>
      ),
    },
    why: {
      title: 'Why Choose GN Solutions',
      content: (
        <>
          <p className="mb-6">
            Choosing the right technology partner is crucial for your business success. Here's why 
            GN Solutions stands out as the preferred choice for businesses seeking digital transformation:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
              <h4 className="text-xl font-semibold mb-3">Expertise & Experience</h4>
              <p>Our team brings decades of combined experience across various industries and technologies, ensuring you get solutions backed by deep knowledge and proven methodologies.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
              <h4 className="text-xl font-semibold mb-3">Tailored Solutions</h4>
              <p>We don't believe in one-size-fits-all. Every solution we deliver is customized to address your unique business challenges and goals.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
              <h4 className="text-xl font-semibold mb-3">Cutting-Edge Technology</h4>
              <p>We stay at the forefront of technological advancements to bring you the most innovative and effective solutions available in the market.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
              <h4 className="text-xl font-semibold mb-3">Client-Centric Approach</h4>
              <p>Your success is our priority. We work closely with you as partners, ensuring transparent communication and aligned objectives throughout our engagement.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
              <h4 className="text-xl font-semibold mb-3">Proven Track Record</h4>
              <p>Our portfolio of successful projects and satisfied clients speaks to our ability to deliver results that drive business growth and operational excellence.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
              <h4 className="text-xl font-semibold mb-3">Ongoing Support</h4>
              <p>Our relationship doesn't end with implementation. We provide continuous support and optimization to ensure your solutions evolve with your business needs.</p>
            </div>
          </div>
        </>
      ),
    },
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Discover GN Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn more about our company, services, and why businesses trust us as their technology partner.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`flex-1 py-4 px-6 text-center transition-colors duration-300 relative ${
                    activeTab === tab.id
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      layoutId="activeTab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800">{tabContent[activeTab].title}</h3>
                {tabContent[activeTab].content}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;