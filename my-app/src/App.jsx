// App //
import { Routes, Route } from 'react-router-dom';
import '../src/styles/Global.scss';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Works from './pages/Works/Works';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery/:index" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
