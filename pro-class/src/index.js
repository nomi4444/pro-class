import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppAppBar from './AppAppBar';
import Hero from './Hero';
import Mainpage from './Mainpage';
import Features from './Features';
import Footer from './Footer';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Mainpage/>
    <AppAppBar/>
    <Hero/>
    <Features/>
    <Footer/>

    
    
    
  </React.StrictMode>
);
