import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tourPackages = [
  { id: 1, title: '4 Days Skardu Valley Standard Tour', days: '4 Days / 3 Nights', price: 'PKR 95,000', image: '/Home/skarduvalley.jpg.jpeg' },
  { id: 2, title: '5 Days Skardu & Shangrila Tour', days: '5 Days / 4 Nights', price: 'PKR 115,000', image: '/Home/skarduvalley.jpg.jpeg' },
  { id: 3, title: '6 Days Skardu & Deosai Plains', days: '6 Days / 5 Nights', price: 'PKR 135,000', image: '/Home/skarduvalley.jpg.jpeg' },
  { id: 4, title: '7 Days Skardu & Hunza Tour', days: '7 Days / 6 Nights', price: 'PKR 155,000', image: '/Home/skarduvalley.jpg.jpeg' },
  { id: 5, title: '9 Days Skardu, Khaplu & Shigar', days: '9 Days / 8 Nights', price: 'PKR 195,000', image: '/Home/skarduvalley.jpg.jpeg' },
  { id: 6, title: '15 Days Complete Northern Pakistan', days: '15 Days / 14 Nights', price: 'PKR 285,000', image: '/Home/skarduvalley.jpg.jpeg' },
];

export default function SkarduValleyToursPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden font-sans">
      
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Home/skarduvalley.jpg.jpeg"
            alt="Skardu Valley Tours"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            Skardu Valley Tour Packages 2025
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium drop-shadow mb-8">
            Gateway to K2 & Deosai Plains
          </p>
          <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full" />
        </div>
      </section>

      <section className="w-full bg-[#f2f2f2] py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Discover Skardu Valley</h2>
            <div className="w-24 h-1 bg-[#a5292f] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-[16px]">
                Skardu Valley, located in the Gilgit-Baltistan region at an elevation of over 8,000 feet, is one of Pakistan's premier tourist destinations. Known as the gateway to some of the world's highest peaks including K2, Skardu offers breathtaking landscapes and adventure opportunities.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                The valley is famous for its stunning lakes, including Shangrila Lake (Lower Kachura Lake), Upper Kachura Lake, and Satpara Lake. Skardu serves as the base for treks to K2 Base Camp, Concordia, and the Deosai National Park, home to the second-highest plateau in the world.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                The best time to visit Skardu is from May to October when the weather is favorable for trekking and sightseeing. The region offers excellent opportunities for mountaineering, trekking, and photography, making it a paradise for adventure enthusiasts.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/Home/skarduvalley.jpg.jpeg"
                alt="Skardu Valley Landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Places to Visit in Skardu</h2>
            <div className="w-24 h-1 bg-[#1368a5] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Shangrila Lake',
              'Deosai National Park',
              'K2 Base Camp',
              'Khaplu Valley',
              'Shigar Valley',
              'Satpara Lake',
              'Upper Kachura Lake',
              'Manthoka Waterfall',
              'Cold Desert',
              'Skardu Fort',
              'Buddha Rock',
              'Concordia'
            ].map((place, index) => (
              <div key={index} className="bg-[#f2f2f2] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#a5292f] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-lg font-bold text-[#1e2024]">{place}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f2f2f2] py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#a5292f] font-bold tracking-wider uppercase text-sm mb-2 block">Tour Packages</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Skardu Valley Tour Packages 2025</h2>
            <div className="w-24 h-1 bg-[#1368a5] mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Experience the grandeur of Skardu with our adventure packages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                <div className="relative h-56 w-full">
                  <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-[#a5292f] text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                    {pkg.days}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#1e2024] mb-3 leading-snug hover:text-[#1368a5] transition-colors cursor-pointer">{pkg.title}</h3>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Starting From</span>
                        <span className="text-lg font-extrabold text-[#a5292f]">{pkg.price}</span>
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

      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Things to Do in Skardu</h2>
            <div className="w-24 h-1 bg-[#a5292f] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Trekking & Mountaineering', desc: 'Trek to K2 Base Camp and explore Concordia' },
              { title: 'Lake Visits', desc: 'Explore beautiful lakes like Shangrila and Satpara' },
              { title: 'Deosai Plains', desc: 'Visit the second-highest plateau in the world' },
              { title: 'Photography', desc: 'Capture stunning mountain landscapes' },
              { title: 'Cultural Tours', desc: 'Explore Khaplu and Shigar valleys' },
              { title: 'Desert Experience', desc: 'Visit the Cold Desert of Skardu' }
            ].map((activity, index) => (
              <div key={index} className="bg-[#f2f2f2] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1e2024] mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#1e2024] py-16 px-4 text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Explore Skardu Valley?</h2>
          <div className="w-16 h-1 bg-[#ffc107] mx-auto mb-6" />
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to customize your perfect Skardu Valley tour package
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
