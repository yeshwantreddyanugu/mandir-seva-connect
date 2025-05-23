
import React from 'react';
import { MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
            About Our Sacred Mission
          </h2>
          <p className="text-lg text-orange-700 max-w-3xl mx-auto">
            Discover the divine vision behind our temple construction project and 
            the spiritual journey that inspired this sacred endeavor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission Content */}
          <div>
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Our Divine Vision</h3>
            <div className="space-y-6 text-orange-700">
              <p>
                The Shri Mandir project was born from a divine calling to create a sacred space 
                where devotees can experience the presence of the divine and find inner peace 
                through prayer, meditation, and community worship.
              </p>
              <p>
                Our temple will feature traditional Vastu Shastra architecture, ensuring that 
                every element from the foundation to the kalasha atop the shikhara resonates 
                with cosmic energies and spiritual vibrations.
              </p>
              <p>
                This sacred space will serve as a center for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Daily prayers and aarti ceremonies</li>
                <li>Festival celebrations and spiritual gatherings</li>
                <li>Community service and charitable activities</li>
                <li>Spiritual education and cultural preservation</li>
                <li>Meditation and yoga sessions</li>
              </ul>
            </div>

            {/* Location */}
            <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-5 h-5 text-orange-600" />
                <h4 className="text-lg font-semibold text-orange-800">Temple Location</h4>
              </div>
              <p className="text-orange-700 mb-2">
                123 Spiritual Valley Road<br />
                Sacred Grove, State 12345<br />
                Near the Holy River
              </p>
              <p className="text-sm text-orange-600">
                Strategically chosen for its peaceful environment and spiritual significance
              </p>
            </div>
          </div>

          {/* Trustees & Values */}
          <div>
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Our Spiritual Foundation</h3>
            
            {/* Values */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-2">Dharma (Righteousness)</h4>
                <p className="text-orange-700 text-sm">
                  Upholding moral and ethical values in all our endeavors
                </p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-2">Seva (Selfless Service)</h4>
                <p className="text-orange-700 text-sm">
                  Serving the community and spreading love through compassionate action
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-2">Bhakti (Devotion)</h4>
                <p className="text-orange-700 text-sm">
                  Fostering deep spiritual connection through devotional practices
                </p>
              </div>
            </div>

            {/* Trust Information */}
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="font-bold text-orange-800 mb-3">Temple Trust</h4>
              <div className="text-sm text-orange-700 space-y-1">
                <p><strong>Registration:</strong> 12A & 80G Certified</p>
                <p><strong>PAN:</strong> ABCDE1234F</p>
                <p><strong>Trust Reg:</strong> TR/12345/2024</p>
                <p><strong>Established:</strong> 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
