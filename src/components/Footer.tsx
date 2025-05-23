
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-800 to-red-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Temple Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ॐ</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Shri Mandir</h3>
                <p className="text-orange-200">Divine Construction Project</p>
              </div>
            </div>
            <p className="text-orange-100 mb-6 leading-relaxed">
              Building a sacred space where devotees can connect with the divine through 
              prayer, meditation, and community service. Every contribution brings us 
              closer to manifesting this divine vision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-200 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">YouTube</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-orange-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-orange-200 hover:text-white transition-colors">About Temple</a></li>
              <li><a href="#donate" className="text-orange-200 hover:text-white transition-colors">Donate</a></li>
              <li><a href="#gallery" className="text-orange-200 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-orange-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-orange-200 hover:text-white transition-colors">Donation Help</a></li>
              <li><a href="#" className="text-orange-200 hover:text-white transition-colors">Tax Benefits</a></li>
              <li><a href="#" className="text-orange-200 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-orange-200 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-orange-200 hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Info */}
        <div className="border-t border-orange-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold mb-3">Temple Trust Information</h5>
              <div className="text-sm text-orange-200 space-y-1">
                <p><strong>Registration:</strong> 12A & 80G Certified Trust</p>
                <p><strong>PAN Number:</strong> ABCDE1234F</p>
                <p><strong>Trust Registration:</strong> TR/12345/2024</p>
                <p><strong>FCRA:</strong> Applied (International Donations)</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Legal</h5>
              <div className="text-sm text-orange-200 space-y-1">
                <p><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></p>
                <p><a href="#" className="hover:text-white transition-colors">Terms of Service</a></p>
                <p><a href="#" className="hover:text-white transition-colors">Refund Policy</a></p>
                <p><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-700 mt-8 pt-6 text-center">
          <p className="text-orange-200 text-sm">
            © 2024 Shri Mandir Trust. All rights reserved. Built with devotion for the divine.
          </p>
          <p className="text-orange-300 text-xs mt-2">
            May this sacred space bring peace, prosperity, and spiritual growth to all devotees. 🙏
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
