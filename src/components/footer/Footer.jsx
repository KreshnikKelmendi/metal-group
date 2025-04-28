import React, { useState } from 'react';
import metalLogo from '../Assets/Picture29.png';
import certificate1 from '../Assets/certificate-1.png';
import certificate2 from '../Assets/certificate-2.png';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaTimes } from 'react-icons/fa';

const Footer = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-[#0a1f2b] text-white mt-16">
        <div className=" mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Logo and About */}
            <div className="flex flex-col items-center md:items-start">
              <img src={metalLogo} alt="Metal Logo" className="w-40 h-auto mb-6" />
              <p className="text-gray-300 text-sm text-center md:text-left">
                Metal Group is a leading provider of high-quality metal services with years of experience in the industry.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-6 text-[#ffaa4a] border-b border-[#ffaa4a] pb-2">QUICK LINKS</h3>
              <ul className="space-y-3 text-center md:text-left">
                <li>
                  <Link 
                    to="/" 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about-metal-group" 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/our-works" 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-6 text-[#ffaa4a] border-b border-[#ffaa4a] pb-2">CONTACT US</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-[#ffaa4a]" />
                  <span className="text-gray-300">Rr. Preshevës, Gjilan 60000 Kosovë</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-3 text-[#ffaa4a]" />
                  <a href="mailto:info@metalgroup-ks.com" className="text-gray-300 hover:text-white transition-colors">
                    info@metalgroup-ks.com
                  </a>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="mr-3 text-[#ffaa4a]" />
                  <a href="tel:+38343704444" className="text-gray-300 hover:text-white transition-colors">
                    +383 43 70 4444
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#ffaa4a]">OUR CERTIFICATES</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div 
                className="w-full md:w-1/2 lg:w-1/3 flex justify-center cursor-pointer"
                onClick={() => openCertificate(certificate1)}
              >
                <img 
                  src={certificate1} 
                  alt="Certificate 1" 
                  className="max-w-full h-auto max-h-96 object-contain border-2 border-gray-600 hover:border-[#ffaa4a] transition-colors" 
                />
              </div>
              <div 
                className="w-full md:w-1/2 lg:w-1/3 flex justify-center cursor-pointer"
                onClick={() => openCertificate(certificate2)}
              >
                <img 
                  src={certificate2} 
                  alt="Certificate 2" 
                  className="max-w-full h-auto max-h-96 object-contain border-2 border-gray-600 hover:border-[#ffaa4a] transition-colors" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="bg-[#071822] py-4 mt-12">
          <div className="container mx-auto px-6">
            <p className="text-center text-gray-400 text-sm">
              Metal Group © {new Date().getFullYear()} | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Certificate Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-[#ffaa4a] transition-colors"
              aria-label="Close certificate view"
            >
              <FaTimes size={28} />
            </button>
            <img 
              src={selectedCertificate} 
              alt="Certificate Full View" 
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;