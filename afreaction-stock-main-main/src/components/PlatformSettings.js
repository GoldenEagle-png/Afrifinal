import React, { useState } from 'react';
import { FaMoon, FaSun, FaBell, FaSms, FaEnvelope } from 'react-icons/fa';
import '../css/css/PlatformSettings.css';

const PlatformSettings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    theme: 'light',
    language: 'English', // Default language
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const handleGeneralChange = (key, value) => {
    setGeneralSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const saveSettings = () => {
    alert('Settings saved successfully!');
    console.log('General Settings:', generalSettings);
    console.log('Notifications:', notifications);
  };

  return (
    <div className="platform-settings-page">
      <h1>Platform Settings</h1>
      <p>Manage your platform configurations and preferences.</p>

      {/* General Settings Section */}
      <section className="settings-section">
        <h2>General Settings</h2>
        <div className="settings-item">
          <label>
            Theme:
            <span className="icon">
              {generalSettings.theme === 'light' ? <FaSun /> : <FaMoon />}
            </span>
          </label>
          <select
            value={generalSettings.theme}
            onChange={(e) => handleGeneralChange('theme', e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="settings-item">
          <label>Language:</label>
          <select
            value={generalSettings.language}
            onChange={(e) => handleGeneralChange('language', e.target.value)}
          >
            <option value="English">English</option>
            <option value="Shona">Shona</option>
          </select>
        </div>
      </section>

      {/* Notification Settings Section */}
      <section className="settings-section">
        <h2>Notification Preferences</h2>
        <div className="settings-item">
          <label>
            <FaEnvelope className="icon" /> Email Notifications
          </label>
          <input
            type="checkbox"
            checked={notifications.email}
            onChange={() => handleNotificationChange('email')}
          />
        </div>
        <div className="settings-item">
          <label>
            <FaSms className="icon" /> SMS Notifications
          </label>
          <input
            type="checkbox"
            checked={notifications.sms}
            onChange={() => handleNotificationChange('sms')}
          />
        </div>
        <div className="settings-item">
          <label>
            <FaBell className="icon" /> Push Notifications
          </label>
          <input
            type="checkbox"
            checked={notifications.push}
            onChange={() => handleNotificationChange('push')}
          />
        </div>
      </section>

      <button className="save-settings-button" onClick={saveSettings}>
        Save Changes
      </button>
    </div>
  );
};

export default PlatformSettings;
