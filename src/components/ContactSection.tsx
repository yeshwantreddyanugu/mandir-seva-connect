
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
            Connect with Us
          </h2>
          <p className="text-lg text-orange-700 max-w-3xl mx-auto">
            Have questions about our temple project? Want to visit our site or learn more about 
            how you can contribute? We're here to guide you on this spiritual journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-orange-800 mb-8">Get in Touch</h3>
            
            <div className="space-y-8">
              {/* Temple Office */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-800 mb-2">Temple Office</h4>
                  <p className="text-orange-700">
                    123 Spiritual Valley Road<br />
                    Sacred Grove, State 12345<br />
                    Near the Holy River
                  </p>
                  <p className="text-sm text-orange-600 mt-2">
                    Open: Monday - Saturday, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-800 mb-2">Contact Numbers</h4>
                  <p className="text-orange-700">
                    <strong>Temple Office:</strong> +91-12345-67890<br />
                    <strong>Trustee:</strong> +91-98765-43210<br />
                    <strong>Emergency:</strong> +91-11111-22222
                  </p>
                  <p className="text-sm text-orange-600 mt-2">
                    Available 24/7 for spiritual guidance
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl">
                  @
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-800 mb-2">Email</h4>
                  <p className="text-orange-700">
                    <strong>General:</strong> info@shrimandir.org<br />
                    <strong>Donations:</strong> donations@shrimandir.org<br />
                    <strong>Events:</strong> events@shrimandir.org
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl">
                  📱
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-800 mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-orange-600 hover:text-orange-800 transition-colors">Facebook</a>
                    <a href="#" className="text-orange-600 hover:text-orange-800 transition-colors">Instagram</a>
                    <a href="#" className="text-orange-600 hover:text-orange-800 transition-colors">YouTube</a>
                  </div>
                  <p className="text-sm text-orange-600 mt-2">
                    Stay updated with construction progress and events
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Quick Contact */}
          <div>
            <h3 className="text-2xl font-bold text-orange-800 mb-8">Visit Our Location</h3>
            
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-orange-200 to-red-300 rounded-xl p-8 mb-8 min-h-64 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl mb-4">🗺️</div>
                <h4 className="text-lg font-semibold mb-2">Interactive Map</h4>
                <p className="text-sm opacity-90">
                  Click to open in Google Maps<br />
                  Get directions to our temple site
                </p>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h4 className="text-lg font-semibold text-orange-800 mb-6">Quick Message</h4>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
