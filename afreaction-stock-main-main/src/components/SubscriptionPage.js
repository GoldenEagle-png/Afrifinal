import React, { useState } from 'react';
import '../css/css/SubscriptionPage.css';

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleConfirmSubscription = () => {
    if (!paymentMethod) {
      alert('Please select a payment method before confirming your subscription.');
      return;
    }
    setShowPopup(true);
  };

  const handleSubmitDetails = () => {
    alert(`Subscription confirmed!\nPlan: ${selectedPlan}\nPayment Method: ${paymentMethod}\nDetails: ${JSON.stringify(paymentDetails)}`);
    setShowPopup(false);
  };

  return (
    <div className="subscription-page">
      <h1>Manage Your Subscription</h1>
      <p>Choose a subscription plan and update your payment details.</p>

      {/* Subscription Plans Section */}
      <section className="plans-section">
        <h2>Select Your Plan</h2>
        <div className="plans">
          <div
            className={`plan-card ${selectedPlan === 'basic' ? 'selected' : ''}`}
            onClick={() => handlePlanSelect('basic')}
          >
            <h3>Basic Plan</h3>
            <p>$9.99/month</p>
            <p>Access to basic images</p>
          </div>
          <div
            className={`plan-card ${selectedPlan === 'premium' ? 'selected' : ''}`}
            onClick={() => handlePlanSelect('premium')}
          >
            <h3>Premium Plan</h3>
            <p>$19.99/month</p>
            <p>Access to all images, including exclusive content</p>
          </div>
          <div
            className={`plan-card ${selectedPlan === 'enterprise' ? 'selected' : ''}`}
            onClick={() => handlePlanSelect('enterprise')}
          >
            <h3>Enterprise Plan</h3>
            <p>Custom pricing</p>
            <p>Unlimited downloads for large businesses</p>
          </div>
        </div>
      </section>

      {/* Payment Method Section */}
      <section className="payment-method-section">
        <h2>Payment Details</h2>
        <div className="payment-method">
          <label>
            Payment Method:
            <select value={paymentMethod} onChange={handlePaymentChange}>
              <option value="">Select a payment method</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
              <option value="ecocash">Ecocash</option>
              <option value="onemoney">OneMoney</option>
              <option value="innbucks">Innbucks</option>
              <option value="omari">Omari</option>
            </select>
          </label>
        </div>
      </section>

      {/* Confirmation Section */}
      <section className="confirmation-section">
        <h2>Confirm Your Plan</h2>
        <p>
          You have selected the <strong>{selectedPlan}</strong> plan. Please review your payment details and confirm.
        </p>
        <button className="confirm-btn" onClick={handleConfirmSubscription}>
          Confirm Subscription
        </button>
      </section>

      {/* Popup Section */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Enter Payment Details</h3>
            {paymentMethod === 'credit-card' && (
              <div>
                <label>
                  Card Number:
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Enter your card number"
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Expiry Date:
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  CVC:
                  <input
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            )}
            {paymentMethod === 'ecocash' && (
              <label>
                Phone Number:
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your Ecocash number"
                  onChange={handleInputChange}
                />
              </label>
            )}
            {paymentMethod === 'onemoney' && (
              <label>
                Phone Number:
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your OneMoney number"
                  onChange={handleInputChange}
                />
              </label>
            )}
            {paymentMethod === 'innbucks' && (
              <label>
                Phone Number:
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your Innbucks number"
                  onChange={handleInputChange}
                />
              </label>
            )}
            {paymentMethod === 'omari' && (
              <label>
                Phone Number:
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your Omari number"
                  onChange={handleInputChange}
                />
              </label>
            )}
            <button className="submit-btn" onClick={handleSubmitDetails}>
              Submit Details
            </button>
            <button className="cancel-btn" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPage;
