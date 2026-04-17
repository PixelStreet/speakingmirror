import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/our-story', label: 'Our Story' },
    { path: '/capabilities', label: 'Capabilities' },
    { path: '/the-work', label: 'The Work' },
    { path: '/brands', label: 'Brands' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
            <img 
              src="https://customer-assets.emergentagent.com/job_a6659117-80bd-44e6-b635-f0178e8af557/artifacts/c3g6j18u_SM.png" 
              alt="Speaking Mirror" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? 'text-[#1e1919] font-bold'
                    : 'text-[#1e1919] hover:text-[#fa551e]'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#fa551e] transform origin-left transition-transform duration-300 ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <Button 
            className="hidden lg:inline-flex bg-[#fa551e] hover:bg-[#ff8c19] text-white transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#1e1919] hover:text-[#fa551e] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#1e1919] font-bold bg-[#fa551e]/10 px-3 rounded-lg'
                    : 'text-[#1e1919] hover:text-[#fa551e] px-3'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="w-full bg-[#fa551e] hover:bg-[#ff8c19] text-white"
            >
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
