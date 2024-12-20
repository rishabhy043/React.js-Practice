import React from 'react';
import ReactDOM from 'react-dom/client';

// Creating elements using React.createElement
const App = React.createElement(
  'div', 
  { className: 'app-container' },
  React.createElement('h1', { key: 1 }, 'Welcome to React'),
  React.createElement('p', { key: 2 }, 'This is a simple example using React.createElement.')
);

// Get the root element where you want to render the component
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(App);
