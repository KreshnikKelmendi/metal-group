import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Homepage from './components/pages/Homepage';
import Footer from './components/footer/Footer';
import AboutUsPage from './components/pages/AboutUsPage';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
        <Header />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/about-metal-group' element={<AboutUsPage />} />
              <Route path='/services' element={<ServicesPage />} />
              <Route path='/contact' element={<ContactPage />} />
            </Routes>
            <Footer />
    </BrowserRouter>
  );
}

export default App;
