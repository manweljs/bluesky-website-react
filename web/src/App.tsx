import React from 'react';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Collaboration from './components/Collaboration';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Collaboration />
      <Products />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
