import React, { useEffect, useState } from 'react';
import '../css/css/BillingPage.css';

const BillingPage = () => {
  const [billingHistory, setBillingHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [newMethod, setNewMethod] = useState('');

  // Fetch billing history from the backend
  useEffect(() => {
    const fetchBillingHistory = async () => {
      try {
        const response = await fetch('https://your-backend-api.com/billing-history');
        if (!response.ok) {
          throw new Error('Failed to fetch billing history.');
        }
        const data = await response.json();
        setBillingHistory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBillingHistory();
  }, []);

  const handleAddPaymentMethod = () => {
    if (!newMethod) {
      alert('Please enter a valid payment method.');
      return;
    }
    alert(`Payment method added: ${newMethod}`);
    setNewMethod('');
  };

  return (
    <div className="billing-page">
      <h1>Billing & Payments</h1>
      <p>View your billing history and manage payment methods.</p>

      {/* Billing History Section */}
      <section className="billing-history">
        <h2>Billing History</h2>
        {loading ? (
          <p>Loading billing history...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : billingHistory.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.date}</td>
                  <td>{entry.amount}</td>
                  <td className={entry.status.toLowerCase()}>{entry.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No billing history found.</p>
        )}
      </section>

      {/* Payment Management Section */}
      <section className="payment-management">
        <h2>Manage Payment Methods</h2>
        <div className="payment-methods">
          <label>
            Select Payment Method:
            <select
              value={selectedMethod}
              onChange={(e) => setSelectedMethod(e.target.value)}
            >
              <option value="">Select a method</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </label>
          <p>Selected Method: {selectedMethod || 'None'}</p>
        </div>

        <div className="add-payment-method">
          <label>
            Add New Payment Method:
            <input
              type="text"
              placeholder="e.g., New Credit Card, PayPal"
              value={newMethod}
              onChange={(e) => setNewMethod(e.target.value)}
            />
          </label>
          <button onClick={handleAddPaymentMethod}>Add Method</button>
        </div>
      </section>
    </div>
  );
};

export default BillingPage;
