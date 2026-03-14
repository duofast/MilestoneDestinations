"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const destinations = [
  'Azad Kashmir Tours',
  'Chitral Valley Tours',
  'Fairy Meadows Pakistan',
  'Hunza Valley Tours',
  'Murree Tours',
  'Naran Kaghan Tours',
  'Skardu Valley Tours',
  'Swat Valley Tours',
  'Other'
];

const travellerTypes = [
  'Couple',
  'Family',
  'Solo Traveller',
  'Group'
];

const budgetRanges = [
  '50,000 to 100,000',
  '100,000 to 150,000',
  '150,000 to 200,000',
  'Over 200,000'
];

export default function EnquirePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    numberOfDays: '',
    adults: '',
    children: '',
    infants: '',
    travellerType: '',
    mustHaves: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    alert('Thank you for your enquiry! We will contact you soon.');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Home/homeMain.jpeg"
            alt="Get a Quote"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            Get a Quote
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium drop-shadow mb-8">
            Tell us about your travel plans
          </p>
          <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full" />
        </div>
      </section>

      {/* 2. FORM SECTION */}
      <section className="w-full bg-[#f2f2f2] py-16 px-4">
        <div className="max-w-[800px] mx-auto">
          
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center ${currentStep >= 1 ? 'text-[#1368a5]' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${currentStep >= 1 ? 'bg-[#1368a5] text-white' : 'bg-gray-300 text-gray-600'}`}>
                  1
                </div>
                <span className="ml-2 font-semibold">Personal Details</span>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-300">
                <div className={`h-full transition-all duration-300 ${currentStep >= 2 ? 'bg-[#1368a5]' : ''}`} style={{ width: currentStep >= 2 ? '100%' : '0%' }} />
              </div>
              <div className={`flex items-center ${currentStep >= 2 ? 'text-[#1368a5]' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${currentStep >= 2 ? 'bg-[#1368a5] text-white' : 'bg-gray-300 text-gray-600'}`}>
                  2
                </div>
                <span className="ml-2 font-semibold">Travel Plans</span>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-300">
                <div className={`h-full transition-all duration-300 ${currentStep >= 3 ? 'bg-[#1368a5]' : ''}`} style={{ width: currentStep >= 3 ? '100%' : '0%' }} />
              </div>
              <div className={`flex items-center ${currentStep >= 3 ? 'text-[#1368a5]' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${currentStep >= 3 ? 'bg-[#1368a5] text-white' : 'bg-gray-300 text-gray-600'}`}>
                  3
                </div>
                <span className="ml-2 font-semibold">More Details</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            
            {/* Step 1 - Personal Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1e2024] mb-6">Step 1 - Personal Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-[#1e2024] mb-2">
                      First Name <span className="text-[#a5292f]">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-[#1e2024] mb-2">
                      Last Name <span className="text-[#a5292f]">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#1e2024] mb-2">
                    Email <span className="text-[#a5292f]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#1e2024] mb-2">
                    Phone <span className="text-[#a5292f]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#1368a5] hover:bg-[#1e2024] text-white font-bold py-3 px-8 rounded transition-colors duration-300"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 - Travel Plans */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1e2024] mb-6">Step 2 - Tell us your travel plans</h2>
                
                <div>
                  <label htmlFor="destination" className="block text-sm font-bold text-[#1e2024] mb-2">
                    Where would you like to go?
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                  >
                    <option value="">Select a destination</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>{dest}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="departureDate" className="block text-sm font-bold text-[#1e2024] mb-2">
                      Departure Date <span className="text-[#a5292f]">*</span>
                    </label>
                    <input
                      type="date"
                      id="departureDate"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleInputChange}
                      required
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="returnDate" className="block text-sm font-bold text-[#1e2024] mb-2">
                      Return Date <span className="text-[#a5292f]">*</span>
                    </label>
                    <input
                      type="date"
                      id="returnDate"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      required
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="numberOfDays" className="block text-sm font-bold text-[#1e2024] mb-2">
                    Number of Days
                  </label>
                  <input
                    type="number"
                    id="numberOfDays"
                    name="numberOfDays"
                    value={formData.numberOfDays}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="bg-gray-300 hover:bg-gray-400 text-[#1e2024] font-bold py-3 px-8 rounded transition-colors duration-300"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#1368a5] hover:bg-[#1e2024] text-white font-bold py-3 px-8 rounded transition-colors duration-300"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 - More Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1e2024] mb-6">Step 3 - Please tell us more to help us tailor your holiday</h2>
                
                <div>
                  <label className="block text-sm font-bold text-[#1e2024] mb-4">
                    How many people are travelling with you?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="adults" className="block text-sm font-semibold text-gray-700 mb-2">
                        Adults <span className="text-[#a5292f]">*</span>
                      </label>
                      <input
                        type="number"
                        id="adults"
                        name="adults"
                        value={formData.adults}
                        onChange={handleInputChange}
                        required
                        min="1"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="children" className="block text-sm font-semibold text-gray-700 mb-2">
                        Children
                      </label>
                      <input
                        type="number"
                        id="children"
                        name="children"
                        value={formData.children}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="infants" className="block text-sm font-semibold text-gray-700 mb-2">
                        Infants
                      </label>
                      <input
                        type="number"
                        id="infants"
                        name="infants"
                        value={formData.infants}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="travellerType" className="block text-sm font-bold text-[#1e2024] mb-2">
                    Please select your traveller type <span className="text-[#a5292f]">*</span>
                  </label>
                  <select
                    id="travellerType"
                    name="travellerType"
                    value={formData.travellerType}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                  >
                    <option value="">Please select</option>
                    {travellerTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mustHaves" className="block text-sm font-bold text-[#1e2024] mb-2">
                    Must Haves / Must Nots
                  </label>
                  <textarea
                    id="mustHaves"
                    name="mustHaves"
                    value={formData.mustHaves}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                    placeholder="Tell us about any must-haves or must-nots for your trip..."
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-bold text-[#1e2024] mb-2">
                    Finally, please tell us your approximate total budget. <br />
                    <span className="text-sm font-normal text-gray-600">This is so we can offer you the best options to match your requirements</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1368a5] transition-colors"
                  >
                    <option value="">Please select</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>PKR {range}</option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="bg-gray-300 hover:bg-gray-400 text-[#1e2024] font-bold py-3 px-8 rounded transition-colors duration-300"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="bg-[#a5292f] hover:bg-[#1368a5] text-white font-bold py-3 px-8 rounded transition-colors duration-300"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}

          </form>
        </div>
      </section>

      {/* 3. CONTACT SECTION */}
      <section className="w-full bg-[#1e2024] py-16 px-4 text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">Want to learn more?</h2>
          <div className="w-16 h-1 bg-[#ffc107] mx-auto mb-6" />
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're here to help whether you need information or you already have a travel program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+923373733732" className="flex items-center justify-center bg-[#a5292f] hover:bg-white hover:text-[#a5292f] text-white font-bold py-3 px-8 rounded transition-colors duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +92 337 3733732
            </a>
            <a href="mailto:sales@milestonedestinations.com" className="flex items-center justify-center border-2 border-[#1368a5] bg-transparent hover:bg-[#1368a5] text-white font-bold py-3 px-8 rounded transition-colors duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Email Us
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Speak to our dedicated concierge team
          </p>
          <div className="mt-6 bg-white/10 p-6 rounded-lg max-w-md mx-auto">
            <p className="text-gray-300 mb-2">Office E2, 5th Floor, Khalifa Heights,</p>
            <p className="text-gray-300">Chaklala Road near Committee Chowk, Rawalpindi</p>
          </div>
        </div>
      </section>

    </main>
  );
}
