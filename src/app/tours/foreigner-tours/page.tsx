import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const foreignerTours = [
  { id: 1, title: '7 Days 7 Nights Swat, Kalam, Malam Jabba & Islamabad Tour', days: '7 Days / 7 Nights', price: 'PKR 145,000', image: '/Home/swatvalley.jpg.jpeg' },
  { id: 2, title: '14 Days 14 Nights Hindu Kush & Karakoram Adventure Tour', days: '14 Days / 14 Nights', price: 'PKR 285,000', image: '/Home/hunzavalley.jpg.jpeg' },
  { id: 3, title: '12 Days 12 Nights Karakoram, Hunza and Skardu Valley Tour', days: '12 Days / 12 Nights', price: 'PKR 245,000', image: '/Home/skarduvalley.jpg.jpeg' },
];

const bestPlaces = [
  'Naran Kaghan Valley',
  'Skardu Valley',
  'Khunjrab Border',
  'Hunza Valley',
  'Swat Valley',
  'Azad Kashmir',
  'Neelum Valley',
  'Badshahi Mosque',
  'Wahga Border',
  'Karakoram',
  'Gawadar Port',
  'Mazar-e-Quaid',
  'Makli',
  'Murree',
  'Islamabad the beautiful'
];

export default function ForeignerToursPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Home/homeMain.jpeg"
            alt="Foreigner Tours"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            Foreigner Tours 2026
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium drop-shadow mb-8">
            Exciting Pakistan Tour Packages For Foreign Tourists
          </p>
          <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full" />
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="w-full bg-[#f2f2f2] py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">List of Foreigner Tours Packages 2026</h2>
            <div className="w-24 h-1 bg-[#a5292f] mx-auto rounded-full" />
          </div>

          <div className="space-y-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#1e2024] mb-4">Exciting Pakistan Tour Packages 2025 For The Foreigner Tourists Visiting Pakistan</h3>
              <p className="text-gray-600 leading-relaxed text-[16px] mb-4">
                Being one of the best tour operators in Pakistan, See Pakistan tours have many adventurous Pakistan tour packages 2025 for the Foreigners Tourists Visiting Pakistan.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px] mb-4">
                Additionally, this time we have some pre-planned Foreigner tours in Pakistan tour packages for the foreigner's tourists visiting Pakistan. As millions of foreign tourists have visited Pakistan in the last few years. In 2018, around 1.9 million foreign travelers visited Pakistan and labeled it as one of the <strong>Safest Countries in the World</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px] mb-4">
                However, in these Pakistan Tour packages for foreigners, they can cover almost every famous place in Northern Pakistan. These tours can make them explore the three highest mountains ranges, Himalaya, Hindukush, and Karakorum mountain range. Moreover, they can experience the rich culture, traditions, and history of Northern Pakistan.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                Moreover, in these foreigner tours packages, wanderers from all around the world can experience festivals of Kalasha valleys to jeep ride of the peaceful Deosai Plateau of Skardu, with the colors of Hunza valley. Therefore, grab one of the best exploring Pakistan tour packages in 2025 to have the best travel experience of your life.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#1e2024] mb-6">Best Places To Visit For Foreigners Tourists Visiting Pakistan In 2025</h3>
              <p className="text-gray-600 mb-6">Following are some of the most visited historical and beautiful tourist places in Pakistan and are included in our Pakistan Tour Packages 2025.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bestPlaces.map((place, index) => (
                  <div key={index} className="flex items-center bg-[#f2f2f2] p-4 rounded-lg">
                    <svg className="w-5 h-5 text-[#a5292f] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700 font-semibold">{place}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                Hence, below are the Pakistan tour packages specially designed for foreign tourists visiting Pakistan in 2025. So Take a flight now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TOUR PACKAGES GRID */}
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#a5292f] font-bold tracking-wider uppercase text-sm mb-2 block">Tour Packages</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Foreigner Tours Packages 2026</h2>
            <div className="w-24 h-1 bg-[#1368a5] mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Specially designed tour packages for foreign tourists visiting Pakistan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foreignerTours.map((tour) => (
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
            We're here to help whether you need information or you already have a travel program. Speak to our dedicated concierge team to customize your perfect foreigner tour package.
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
