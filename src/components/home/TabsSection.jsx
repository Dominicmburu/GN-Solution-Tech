import React, { useState, useEffect } from 'react';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import '../../assets/css/TabsSection.css';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  const tabs = [
    { id: 'about', label: 'About Us', icon: 'bi bi-building' },
    { id: 'services', label: 'Our Services', icon: 'bi bi-gear-fill' },
    { id: 'why', label: 'Why Choose Us', icon: 'bi bi-trophy-fill' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const tabsElement = document.getElementById('solutionsTabs');
      if (tabsElement) {
        const position = tabsElement.getBoundingClientRect();
        setIsScrolled(position.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'services':
        return <ServicesSection />;
      case 'why':
        return <WhyChooseUsSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <section className="tabs-section">
      <div className="">        
        <div className="row">
          <div className="col-lg-12">
            <div className="custom-tabs-container">
              <div className={`tab-navigation ${isScrolled ? 'sticky-tabs' : ''}`}>
                <div className="container">
                  <ul className="nav custom-tabs" id="solutionsTabs" role="tablist">
                    {tabs.map((tab) => (
                      <li className="nav-item" key={tab.id} role="presentation">
                        <button
                          className={`nav-link-tab ${activeTab === tab.id ? 'active' : ''}`}
                          onClick={() => setActiveTab(tab.id)}
                          id={`${tab.id}-tab`}
                          type="button"
                          role="tab"
                          aria-controls={tab.id}
                          aria-selected={activeTab === tab.id}
                        >
                          <i className={`${tab.icon} tab-icon`}></i>
                          <span style={{color: "var(--tt-color)"}} className="tab-text">{tab.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="tab-content-container">
                <div className="tab-content" id="solutionsTabsContent">
                  <div 
                    className={`tab-pane fade ${activeTab ? 'show active' : ''}`}
                    id="tabContent"
                    role="tabpanel"
                  >
                    {renderTabContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;