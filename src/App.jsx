// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Herotop from './components/Herotop';
import Slider from './components/Banner';
import FlavorSlider from './components/Flavourslider';
import Arunad from './components/arun_ad';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

import Products from './components/Products';
import Media from './components/Media';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <Herotop />
            <FlavorSlider />
            <Arunad />
            <Testimonial />
          </>
        } />
        <Route path="/products" element={<Products />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

