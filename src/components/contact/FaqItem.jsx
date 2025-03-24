import React from 'react';
import { FaChevronDown } from 'react-icons/fa';


const FaqItem = ({ question, answer, isOpen, toggleFaq, faqId }) => {
    return (
        <div className={`accordion-item faq-item ${isOpen ? 'active' : ''}`}>
            <div
                className="accordion-header faq-header"
                onClick={() => toggleFaq(faqId)}
            >
                <h5 className="mb-0">{question}</h5>
                <FaChevronDown className={`faq-icon ${isOpen ? 'rotate' : ''}`} />
            </div>
            <div className={`accordion-body faq-body ${isOpen ? 'show' : ''}`}>
                <p className="mb-0">{answer}</p>
            </div>
        </div>
    );
};

export default FaqItem;