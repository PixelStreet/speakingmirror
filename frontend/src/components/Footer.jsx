import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e1919] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_a6659117-80bd-44e6-b635-f0178e8af557/artifacts/c3g6j18u_SM.png" 
              alt="Speaking Mirror" 
              className="h-12 w-auto"
            />
            <p className="text-[#bbb5ae] text-sm leading-relaxed">
              Full-scale marketing agency specializing in Digital Marketing & Content Creation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#bbb5ae] hover:text-[#fa551e] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#bbb5ae] hover:text-[#fa551e] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#bbb5ae] hover:text-[#fa551e] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#bbb5ae] hover:text-[#fa551e] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#bbb5ae] hover:text-[#fa551e] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-[#bbb5ae] hover:text-[#fa551e] transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="text-[#bbb5ae] hover:text-[#fa551e] transition-colors text-sm">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/the-work" className="text-[#bbb5ae] hover:text-[#fa551e] transition-colors text-sm">
                  The Work
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-[#bbb5ae] hover:text-[#fa551e] transition-colors text-sm">
                  Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-[#bbb5ae]">
              <li>Social Media Marketing</li>
              <li>SEO Optimization</li>
              <li>Content Creation</li>
              <li>Performance Marketing</li>
              <li>Brand Strategy</li>
              <li>Influencer Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-[#bbb5ae]">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-[#bbb5ae]">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </li>
              {contactInfo.offices.map((office) => (
                <li key={office.city}>
                  <a href={office.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-2 text-sm text-[#bbb5ae] hover:text-[#fa551e] transition-colors">
                    <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">{office.city}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#61525a] pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#bbb5ae] text-sm">
              © {currentYear} Speaking Mirror. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-[#bbb5ae]">
              <a href="#" className="hover:text-[#fa551e] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#fa551e] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
