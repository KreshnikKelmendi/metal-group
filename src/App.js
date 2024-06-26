import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/pages/Homepage';
import Footer from './components/footer/Footer';
import AboutUsPage from './components/pages/AboutUsPage';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';
import OurWorks from './components/pages/OurWorks';
import SinglePageOfWork from './components/pages/SinglePageOfWork';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Add scroll event listener to check scroll position
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-metal-group' element={<AboutUsPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/our-works' element={<OurWorks />} />
        <Route path='/our-works/:workID' element={<SinglePageOfWork />} />
      </Routes>
      <Footer />

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '2px',
            zIndex: '1000',
            background: '#0a1f2b',
            color: '#fff',
            border: 'none',
            padding: '6px 12px',
            fontWeight: '900',
            cursor: 'pointer',
          }}
        >
          ↑
        </button>
      )}
    </BrowserRouter>
  );
}

export default App;
