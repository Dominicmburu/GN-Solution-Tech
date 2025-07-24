import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FaqItem = ({ question, answer, isOpen, toggleFaq, faqId, accentColor = '#f08b0a' }) => {
    return (
        <div className={`accordion-item faq-item ${isOpen ? 'active' : ''}`}>
            <div
                className="accordion-header faq-header"
                onClick={() => toggleFaq(faqId)}
                style={{
                    borderBottom: isOpen ? `1px solid ${accentColor}` : '1px solid transparent',
                    transition: 'all 0.3s ease'
                }}
            >
                <h5 className="mb-0" style={{ 
                    color: isOpen ? accentColor : '#0a1033',
                    transition: 'color 0.3s ease'
                }}>
                    {question}
                </h5>
                <FaChevronDown 
                    className={`faq-icon ${isOpen ? 'rotate' : ''}`} 
                    style={{ 
                        color: isOpen ? accentColor : '#777',
                        transition: 'transform 0.3s ease, color 0.3s ease'
                    }}
                />
            </div>
            <div 
                className={`accordion-body faq-body ${isOpen ? 'show' : ''}`}
                style={{ 
                    maxHeight: isOpen ? '1000px' : '0',
                    transition: 'all 0.3s ease-in-out',
                    overflow: 'hidden'
                }}
            >
                <p className="mb-0">{answer}</p>
            </div>

            <style jsx>{`
                .faq-item {
                    border: 1px solid #eee;
                    border-radius: 8px;
                    margin-bottom: 15px;
                    overflow: hidden;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                }
                
                .faq-item:hover {
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    border-color: ${accentColor};
                }
                
                .faq-header {
                    padding: 18px 20px;
                    background-color: white;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    user-select: none;
                }
                
                .faq-header:hover h5 {
                    color: ${accentColor};
                }
                
                .faq-body {
                    padding: 0 20px;
                    height: auto;
                    background-color: rgba(255, 255, 255, 0.8);
                }
                
                .faq-body.show {
                    padding: 20px;
                    border-top: 1px solid #f0f0f0;
                }
                
                .faq-icon {
                    transition: transform 0.3s ease;
                }
                
                .faq-icon.rotate {
                    transform: rotate(180deg);
                }
                
                .active {
                    border-left: 3px solid ${accentColor};
                }
            `}</style>
        </div>
    );
};

export default FaqItem;