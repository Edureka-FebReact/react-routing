import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/about';
import Products from './components/products';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Router>
    <div>
      <Route exact path='/' component={App}/>
      <Route path='/About' component={About}/>
      <Route path='/products' component={Products}/>
    </div>

  </Router>
    // <App />

);

reportWebVitals();
