import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dentalclinic from './Dentalclinic'; // استدعاء الكومبوننت الجديد

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dentalclinic />
  </React.StrictMode>
);
