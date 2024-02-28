import React from 'react';
import Products from './components/ProductsInView';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blog from './components/Blog';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Products />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
