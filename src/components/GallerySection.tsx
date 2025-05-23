
import React from 'react';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Temple Foundation Ceremony',
      description: 'Sacred groundbreaking ceremony with traditional rituals',
      category: 'Construction',
      image: '🏗️'
    },
    {
      id: 2,
      title: 'Architectural Design',
      description: 'Traditional Vastu Shastra compliant temple design',
      category: 'Design',
      image: '📐'
    },
    {
      id: 3,
      title: 'Community Gathering',
      description: 'Devotees coming together for project blessing',
      category: 'Community',
      image: '🙏'
    },
    {
      id: 4,
      title: 'Stone Carving Work',
      description: 'Skilled artisans crafting intricate temple sculptures',
      category: 'Construction',
      image: '🎨'
    },
    {
      id: 5,
      title: 'Site Progress',
      description: 'Current construction progress and updates',
      category: 'Construction',
      image: '🏛️'
    },
    {
      id: 6,
      title: 'Festival Celebration',
      description: 'Temporary arrangements for current festivities',
      category: 'Community',
      image: '🎉'
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
            Sacred Journey Gallery
          </h2>
          <p className="text-lg text-orange-700 max-w-3xl mx-auto">
            Witness the divine transformation as our temple takes shape. From architectural 
            plans to construction milestones, every moment is blessed with devotion.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Image Placeholder */}
              <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-orange-200 to-red-300 flex items-center justify-center min-h-48">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">{item.image}</div>
                  <div className="text-sm opacity-90">Click to view full image</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-orange-800 mb-2">{item.title}</h3>
                <p className="text-orange-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Update */}
        <div className="mt-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 border border-orange-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">Construction Progress</h3>
            <p className="text-orange-700">Track our journey towards completing this divine project</p>
          </div>

          <div className="space-y-6">
            {/* Progress Bar */}
            <div>
              <div className="flex justify-between text-sm font-semibold text-orange-800 mb-2">
                <span>Overall Progress</span>
                <span>35%</span>
              </div>
              <div className="w-full bg-orange-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: '35%' }}
                ></div>
              </div>
            </div>

            {/* Milestones */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-orange-800">Foundation</h4>
                <p className="text-sm text-orange-600">Completed</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">⚙</span>
                </div>
                <h4 className="font-semibold text-orange-800">Structure</h4>
                <p className="text-sm text-orange-600">In Progress</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">○</span>
                </div>
                <h4 className="font-semibold text-orange-800">Finishing</h4>
                <p className="text-sm text-orange-600">Upcoming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
