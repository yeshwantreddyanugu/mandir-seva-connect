
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-orange-100 via-red-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🙏 Divine Construction Project
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-6 leading-tight">
                Shri Mandir
                <span className="block text-3xl md:text-4xl text-red-700 mt-2">
                  Temple of Divinity
                </span>
              </h1>
              <p className="text-lg md:text-xl text-orange-700 mb-8 max-w-2xl">
                Join us in building a sacred space where devotees can connect with the divine. 
                Your contribution will help create a spiritual sanctuary for generations to come.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#donate"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Donate for Seva
              </a>
              <a
                href="#about"
                className="border-2 border-orange-400 text-orange-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-orange-200">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-800">₹25L</div>
                <div className="text-sm text-orange-600">Raised</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-800">1,250</div>
                <div className="text-sm text-orange-600">Devotees</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-800">₹1Cr</div>
                <div className="text-sm text-orange-600">Goal</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative bg-gradient-to-br from-orange-200 to-red-300 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-orange-300 to-red-400 flex items-center justify-center min-h-96">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🏛️</div>
                  <p className="text-lg font-semibold">Temple Design Preview</p>
                  <p className="text-sm opacity-90">Sacred Architecture in Progress</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-300 rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
