
import React, { useState } from 'react';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [donationCategory, setDonationCategory] = useState('construction');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [prayerMessage, setPrayerMessage] = useState('');

  const suggestedAmounts = [500, 1000, 5000, 11000, 21000, 51000];
  
  const categories = [
    { id: 'construction', name: 'Temple Construction', description: 'Main building and infrastructure' },
    { id: 'blessing', name: 'Family Blessings', description: 'Special prayers and ceremonies' },
    { id: 'memory', name: 'In Memory/Honor', description: 'Dedicated donations for spiritual intent' },
    { id: 'general', name: 'General Seva', description: 'Daily operations and maintenance' }
  ];

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    console.log('Donation Details:', {
      amount,
      type: donationType,
      category: donationCategory,
      anonymous: isAnonymous,
      message: prayerMessage
    });
    
    // Here you would integrate with payment gateway
    alert(`Thank you for your generous donation of ₹${amount}! This would redirect to payment gateway.`);
  };

  return (
    <section id="donate" className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
            Support Our Sacred Mission
          </h2>
          <p className="text-lg text-orange-700 max-w-3xl mx-auto">
            Your generous contribution will help manifest this divine vision. Every donation, 
            big or small, brings us closer to completing this sacred temple.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6">
              <h3 className="text-2xl font-bold text-center">Make a Donation</h3>
              <p className="text-center opacity-90 mt-2">Choose your preferred way to contribute</p>
            </div>

            <div className="p-8">
              {/* Donation Categories */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-orange-800 mb-4">Donation Category</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        donationCategory === category.id
                          ? 'border-orange-400 bg-orange-50'
                          : 'border-orange-200 hover:border-orange-300'
                      }`}
                      onClick={() => setDonationCategory(category.id)}
                    >
                      <h5 className="font-semibold text-orange-800">{category.name}</h5>
                      <p className="text-sm text-orange-600 mt-1">{category.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donation Type */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-orange-800 mb-4">Donation Type</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                      donationType === 'one-time'
                        ? 'border-orange-400 bg-orange-50 text-orange-800'
                        : 'border-orange-200 text-orange-700 hover:border-orange-300'
                    }`}
                    onClick={() => setDonationType('one-time')}
                  >
                    <div className="font-semibold">One-Time Donation</div>
                    <div className="text-sm opacity-80">Single contribution</div>
                  </button>
                  <button
                    className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                      donationType === 'recurring'
                        ? 'border-orange-400 bg-orange-50 text-orange-800'
                        : 'border-orange-200 text-orange-700 hover:border-orange-300'
                    }`}
                    onClick={() => setDonationType('recurring')}
                  >
                    <div className="font-semibold">Monthly Seva</div>
                    <div className="text-sm opacity-80">Recurring monthly donation</div>
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-orange-800 mb-4">Select Amount</h4>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {suggestedAmounts.map((amount) => (
                    <button
                      key={amount}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        selectedAmount === amount && !customAmount
                          ? 'border-orange-400 bg-orange-50 text-orange-800'
                          : 'border-orange-200 text-orange-700 hover:border-orange-300'
                      }`}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-orange-700">Custom Amount:</span>
                  <div className="flex items-center">
                    <span className="text-orange-800 font-semibold">₹</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(0);
                      }}
                      placeholder="Enter amount"
                      className="ml-1 px-3 py-2 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Prayer Message */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-orange-800 mb-4">Prayer Message (Optional)</h4>
                <textarea
                  value={prayerMessage}
                  onChange={(e) => setPrayerMessage(e.target.value)}
                  placeholder="Share your prayers, intentions, or dedication message..."
                  className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 resize-none"
                  rows={3}
                ></textarea>
              </div>

              {/* Anonymous Donation */}
              <div className="mb-8">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-5 h-5 text-orange-600 border-orange-300 rounded focus:ring-orange-500"
                  />
                  <span className="text-orange-700">Make this donation anonymous</span>
                </label>
              </div>

              {/* Donate Button */}
              <div className="text-center">
                <button
                  onClick={handleDonate}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Donate ₹{customAmount || selectedAmount.toLocaleString()} Now
                </button>
                <p className="text-sm text-orange-600 mt-4">
                  Secure payment powered by Razorpay/Stripe • Tax exemption under 80G
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
