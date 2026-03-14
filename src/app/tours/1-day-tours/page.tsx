import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const oneDayTours = [
  { id: 1, title: '1 Day Murree Hills, Patriata and Islamabad Tour', days: '1 Day', price: 'PKR 65,000', image: '/Home/murree.jpg.jpeg' },
  { id: 2, title: '1 Day Taxila Museum and Khanpur Dam Tour', days: '1 Day', price: 'PKR 65,000', image: '/Home/homeMain.jpeg' },
  { id: 3, title: '1 Day Khewra Salt Mines and Katas Raj Temple Tour', days: '1 Day', price: 'PKR 65,000', image: '/Home/homeMain.jpeg' },
  { id: 4, title: '1 Day Pakistan Monument, Lok Virsa & Margalla Hills of Islamabad Tour', days: '1 Day', price: 'PKR 65,000', image: '/Home/homeMain.jpeg' },
  { id: 5, title: '1 Day Murree, Nathia Gali and Ayubia Tour', days: '1 Day', price: 'PKR 65,000', image: '/Home/murree.jpg.jpeg' },
];

export default function OneDayToursPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Home/homeMain.jpeg"
            alt="1 Day Tours"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            1 Day Tours 2026
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium drop-shadow mb-8">
            Quick & Affordable Day Trips From Islamabad
          </p>
          <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full" />
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="w-full bg-[#f2f2f2] py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">List of 1 Day Tours Packages 2026</h2>
            <div className="w-24 h-1 bg-[#a5292f] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1e2024]">1 Day Tours From Islamabad</h3>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                Are you fond of 1 day tours from Islamabad? Any day trip will not only help you save time but money as well. As you can see, in Pakistan's most popular tourist destination, accommodation comes at a hefty price tag. Multi-day trips require a hotel/resort, even fancier ones, and an overnight stay on board, while on a day trip, you can return to your accommodation overnight or move to a cheaper area. If budget is one of your concerns, then any day trip from Pakistan is the perfect solution.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                Plus, if you're lucky enough to have a good trip, you'll be able to experience plenty of activities, both on land and in the valleys. A well-designed day trip will give you a quick and deep insight into these marvelous landscapes, bewitching mountains, and UNESCO World Heritage Site. Sometimes it doesn't matter how many days you have; what matters is the things you can try.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/Home/murree.jpg.jpeg"
                alt="1 Day Tours"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#1e2024] mb-4">Our Hot-Selling One-Day Tour Packages:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#a5292f] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-semibold">1 Day Murree Hills, Patriata & Islamabad Tour</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#a5292f] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-semibold">1 Day Taxila Museum & Khanpur Dam Tour</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#a5292f] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-semibold">1 Day Khewra Salt Mines & Katas Raj Temple Tour</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#a5292f] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-semibold">1 Day Pakistan Monument, Lok Virsa & Margalla Hills Tour</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#a5292f] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-semibold">1 Day Murree, Nathia Gali & Ayubia Tour</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. TOUR PACKAGES GRID */}
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#a5292f] font-bold tracking-wider uppercase text-sm mb-2 block">Tour Packages</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">1 Day Tours Packages 2026</h2>
            <div className="w-24 h-1 bg-[#1368a5] mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Quick and affordable day trips from Islamabad</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oneDayTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                <div className="relative h-56 w-full">
                  <Image src={tour.image} alt={tour.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-[#a5292f] text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                    {tour.days}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#1e2024] mb-3 leading-snug hover:text-[#1368a5] transition-colors cursor-pointer">{tour.title}</h3>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Starting From</span>
                        <span className="text-lg font-extrabold text-[#a5292f]">{tour.price}</span>
                      </div>
                    </div>
                    <Link href="/enquire" className="block text-center w-full bg-[#f2f2f2] hover:bg-[#ffc107] text-[#1e2024] font-bold py-3 rounded transition-colors duration-300">
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOOK WITH CONFIDENCE */}
      <section className="w-full bg-[#f2f2f2] py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Book With Confidence</h2>
            <div className="w-24 h-1 bg-[#a5292f] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Best Price Guarantee', desc: 'Get unbeatable rates with no hidden fees.' },
              { title: '24/7 Customer Care', desc: "We're here round the clock for your travel support." },
              { title: 'Hand-Picked Tours', desc: 'Experience carefully curated tours across Pakistan.' },
              { title: 'Licensed Operator', desc: 'Registered and trusted by the Department of Tourism.' }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#1368a5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1e2024] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section className="w-full bg-[#1e2024] py-16 px-4 text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">Want to learn more?</h2>
          <div className="w-16 h-1 bg-[#ffc107] mx-auto mb-6" />
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're here to help whether you need information or you already have a travel program. Speak to our dedicated concierge team to customize your perfect 1 day tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+923373733732" className="flex items-center justify-center bg-[#a5292f] hover:bg-white hover:text-[#a5292f] text-white font-bold py-3 px-8 rounded transition-colors duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +92 337 3733732
            </a>
            <Link href="/enquire" className="flex items-center justify-center border-2 border-[#1368a5] bg-transparent hover:bg-[#1368a5] text-white font-bold py-3 px-8 rounded transition-colors duration-300">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
