
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Mumbai, Maharashtra',
      message: 'Being part of this divine project has brought immense peace to our family. The temple will be a beacon of spirituality for generations.',
      donation: '₹51,000',
      avatar: '🙏'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Delhi, NCR',
      message: 'Every contribution feels like a step closer to the divine. This temple will unite our community in devotion and service.',
      donation: '₹25,000',
      avatar: '🕉️'
    },
    {
      id: 3,
      name: 'Venkat Reddy',
      location: 'Hyderabad, Telangana',
      message: 'The architectural design and spiritual planning of this temple is extraordinary. Proud to support this sacred mission.',
      donation: '₹1,00,000',
      avatar: '🙏'
    },
    {
      id: 4,
      name: 'Anonymous Devotee',
      location: 'Bangalore, Karnataka',
      message: 'Contributing to this temple construction has blessed our business and family. The divine energy is already flowing.',
      donation: '₹75,000',
      avatar: '🕉️'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
            Devotee Testimonials
          </h2>
          <p className="text-lg text-orange-700 max-w-3xl mx-auto">
            Hear from fellow devotees who have joined us in this sacred mission. 
            Their support and blessings inspire us to continue this divine work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
            >
              {/* Avatar and Name */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-red-300 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-orange-800">{testimonial.name}</h4>
                  <p className="text-sm text-orange-600">{testimonial.location}</p>
                  <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold mt-2">
                    Contributed {testimonial.donation}
                  </div>
                </div>
              </div>

              {/* Testimonial Message */}
              <blockquote className="text-orange-700 italic leading-relaxed">
                "{testimonial.message}"
              </blockquote>

              {/* Rating Stars */}
              <div className="flex mt-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              Join Our Community of Devotees
            </h3>
            <p className="text-orange-700 mb-6">
              Be part of this sacred journey and help us create a divine space for spiritual growth and community harmony.
            </p>
            <a
              href="#donate"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Contribution
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
