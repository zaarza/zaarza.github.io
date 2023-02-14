import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/input.css';
import { App } from './pages';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>,
);
