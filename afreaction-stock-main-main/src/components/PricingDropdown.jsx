import React from 'react';
import '../css/css/PricingDropdown.css';

const PricingDropdown = ({ onClose }) => {
    const plans = [
        {
            title: "Starter",
            price: "$19",
            color: "#00d1b2",
            details: [
                "3 downloads per day",
                "Access to all products",
                "Access to new releases",
                "15% renewal discount",
            ],
        },
        {
            title: "Basic",
            price: "$39",
            color: "#ffcc00",
            details: [
                "3 downloads per day",
                "Access to all products",
                "Access to new releases",
                "15% renewal discount",
            ],
        },
        {
            title: "Pro",
            price: "$59",
            color: "#ff69b4",
            details: [
                "3 downloads per day",
                "Access to all products",
                "Access to new releases",
                "15% renewal discount",
            ],
        },
        {
            title: "Elite",
            price: "$79",
            color: "#007bff",
            details: [
                "3 downloads per day",
                "Access to all products",
                "Access to new releases",
                "15% renewal discount",
            ],
        },
    ];

    return (
        <div className="pricing-dropdown-overlay" onClick={onClose}>
            <div className="pricing-dropdown-container" onClick={(e) => e.stopPropagation()}>
                <div className="pricing-dropdown-header">
                    <h2>Best Pricing Plan</h2>
                </div>
                <div className="pricing-dropdown-content">
                    {plans.map((plan, index) => (
                        <div key={index} className="pricing__item" style={{ borderColor: plan.color }}>
                            <h4 style={{ color: plan.color }}>{plan.title}</h4>
                            <h2>{plan.price}</h2>
                            <span>Paid Per Month</span>
                            <ul>
                                {plan.details.map((detail, idx) => (
                                    <li key={idx}>
                                        <span className="bullet">•</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                            <button className="btnxy">Get Started Now</button>
                        </div>
                    ))}
                </div>
                <button className="close-btn" onClick={onClose}>&times;</button>
            </div>
        </div>
    );
};

export default PricingDropdown;