
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Donate', href: '#donate' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b-2 border-orange-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ॐ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-orange-800">Shri Mandir</h1>
              <p className="text-sm text-orange-600">Divine Construction Project</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-orange-700 hover:text-orange-900 font-medium transition-colors duration-200 hover:underline decoration-2 decoration-orange-400"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Donate Button */}
          <div className="hidden md:block">
            <a
              href="#donate"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-orange-700" />
            ) : (
              <Menu className="w-6 h-6 text-orange-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-orange-700 hover:text-orange-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#donate"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
