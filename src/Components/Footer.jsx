import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-400">Medcare</h3>
            <p className="text-blue-100 mb-4">
              Your trusted healthcare partner providing quality medical services with
              compassion and excellence.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons with hover effect */}
              {[
                { icon: <Facebook className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center 
                             hover:bg-blue-400 hover:scale-110 transition-transform duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          
            <div>
  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
  <ul className="space-y-2 text-blue-100">
    <li>
      <a href="/" className="hover:text-white transition-colors">
        Home
      </a>
    </li>
    <li>
      <a href="/services" className="hover:text-white transition-colors">
        Services
      </a>
    </li>
    <li>
      <a href="/about" className="hover:text-white transition-colors">
        About Us
      </a>
    </li>
    <li>
      <a href="#blog" className="hover:text-white transition-colors">
        Blog
      </a>
    </li>
    <li>
      <a href="/contact" className="hover:text-white transition-colors">
        Contact Us
      </a>
    </li>
  </ul>
</div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Primary Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Specialist Consultations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Telemedicine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pharmacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Emergency Care
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <p>14 Healthcare Avenue, Jos Plateau State, Nigeria</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>+234 (563) 376-893</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p>info@medcare.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500 pt-8 text-center text-blue-100">
          <p>&copy; 2024 Medcare. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};
