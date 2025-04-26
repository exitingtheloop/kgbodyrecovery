import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light mb-6">KG Body Recovery</h3>
            <p className="text-neutral-400 mb-6">
              Personalized physical therapy and wellness solutions tailored to restore your body and enhance your quality of life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-light mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-neutral-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#booking" className="text-neutral-400 hover:text-white transition-colors">Book Now</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-light mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-neutral-400 hover:text-white transition-colors">Complete Recovery</a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-white transition-colors">Dry Needling</a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-white transition-colors">Myo Therapy</a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-white transition-colors">Cupping Therapy</a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-white transition-colors">Body Pain Rehab</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-light mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary-400 shrink-0 mt-1" />
                <span className="text-neutral-400">123 Wellness Avenue, Suite 101<br />Recovery City, RC 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary-400 shrink-0" />
                <span className="text-neutral-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary-400 shrink-0" />
                <a href="mailto:info@kgbodyrecovery.com" className="text-neutral-400 hover:text-white transition-colors">
                  info@kgbodyrecovery.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} KG Body Recovery. All rights reserved.
          </p>
          <div className="text-neutral-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-3">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;