import { Code2, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer({ setCurrentPage }) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'features', label: 'Features' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'Digital Marketing'
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Facebook', url: '#' },
    { name: 'Instagram', url: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">POLYMORPHISM INFOTECH</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A dynamic IT startup from Nanded, transforming businesses through innovative 
              technology solutions and exceptional service delivery.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="text-sm font-medium">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => setCurrentPage('services')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Polymorphism Infotech</p>
                  <p>Office No. 303, 313, A Wing, Laxmi Horizon,</p>
                  <p> HDFC Bank, Mumbai-Bangaluru Highway,</p>
                  <p>Punawale, Pune - 411033</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+91 9156486909</p>
                  <p>020 47211265</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>info@configserverllp.com</p>
                  {/* <p>support@polymorphisminfotech.com</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © 2024 Polymorphism Infotech. All rights reserved.
              </p>
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <button className="text-gray-300 hover:text-white transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-gray-300 hover:text-white transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-gray-300 hover:text-white transition-colors duration-300">
                Cookie Policy
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
