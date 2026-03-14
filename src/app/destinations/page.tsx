"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const destinations = [
  { id: 1, name: 'Azad Kashmir Tours', slug: 'azad-kashmir-tours', image: '/Home/azadkhasmir.jpg.jpeg' },
  { id: 2, name: 'Chitral Valley Tours', slug: 'chitral-valley-tours', image: '/Home/chitralvalley.jpg.jpeg' },
  { id: 3, name: 'Fairy Meadows Pakistan', slug: 'fairy-meadows-pakistan', image: '/Home/fairymeadows.jpg.jpeg' },
  { id: 4, name: 'Hunza Valley Tours', slug: 'hunza-valley-tours', image: '/Home/hunzavalley.jpg.jpeg' },
  { id: 5, name: 'Murree Tours', slug: 'murree-tours', image: '/Home/murree.jpg.jpeg' },
  { id: 6, name: 'Naran Kaghan Tours', slug: 'naran-kaghan-tours', image: '/Home/kaghanvalley.jpg.jpeg' },
  { id: 7, name: 'Skardu Valley Tours', slug: 'skardu-valley-tours', image: '/Home/skarduvalley.jpg.jpeg' },
  { id: 8, name: 'Swat Valley Tours', slug: 'swat-valley-tours', image: '/Home/swatvalley.jpg.jpeg' },
];

export default function DestinationsPage() {
  const [selectedDestination, setSelectedDestination] = useState<string>('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Home/homeMain.jpeg"
            alt="Pakistan Destinations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            Pakistan Tour Destinations 2025
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium drop-shadow mb-8">
            Best Places to Visit & Travel Packages
          </p>
          <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full" />
        </div>
      </section>

      {/* 2. DESTINATION DROPDOWN SECTION */}
      <section className="w-full bg-[#f2f2f2] py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Explore Our Destinations</h2>
            <div className="w-24 h-1 bg-[#a5292f] mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Select a destination from the dropdown below to view detailed tour packages and information.</p>
          </div>

          {/* Dropdown */}
          <div className="max-w-2xl mx-auto mb-12">
            <label htmlFor="destination-select" className="block text-sm font-bold text-[#1e2024] mb-3 uppercase tracking-wide">
              Choose Your Destination
            </label>
            <div className="relative">
              <select
                id="destination-select"
                value={selectedDestination}
                onChange={(e) => {
                  setSelectedDestination(e.target.value);
                  if (e.target.value) {
                    window.location.href = `/destinations/${e.target.value}`;
                  }
                }}
                className="w-full border-2 border-gray-300 rounded-lg py-4 px-6 text-lg font-semibold text-[#1e2024] bg-white focus:outline-none focus:border-[#1368a5] transition-colors appearance-none cursor-pointer shadow-md hover:shadow-lg"
              >
                <option value="">-- Select a Destination --</option>
                {destinations.map((dest) => (
                  <option key={dest.id} value={dest.slug}>
                    {dest.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-6 h-6 text-[#1368a5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Destination Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.slug}`}
                className="group relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold tracking-wide group-hover:text-[#ffc107] transition-colors">{dest.name}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <Link href="/enquire" className="inline-block bg-[#1368a5] hover:bg-[#a5292f] text-white font-bold py-3 px-8 rounded transition-colors duration-300 shadow-md">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
