import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';

// Initialize the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with Strict Mode for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service worker registration (optional - for PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}