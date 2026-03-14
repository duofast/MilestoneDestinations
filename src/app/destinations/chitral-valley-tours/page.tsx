import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tourPackages = [
  { id: 1, title: '4 Days Chitral Valley Standard Tour', days: '4 Days / 3 Nights', price: 'PKR 85,000', image: '/Home/chitralvalley.jpg.jpeg' },
  { id: 2, title: '5 Days Chitral & Kalash Valley Tour', days: '5 Days / 4 Nights', price: 'PKR 105,000', image: '/Home/chitralvalley.jpg.jpeg' },
  { id: 3, title: '6 Days Chitral & Shandur Tour', days: '6 Days / 5 Nights', price: 'PKR 125,000', image: '/Home/chitralvalley.jpg.jpeg' },
  { id: 4, title: '7 Days Complete Chitral Exploration', days: '7 Days / 6 Nights', price: 'PKR 145,000', image: '/Home/chitralvalley.jpg.jpeg' },
  { id: 5, title: '8 Days Chitral, Kalash & Garam Chashma', days: '8 Days / 7 Nights', price: 'PKR 165,000', image: '/Home/chitralvalley.jpg.jpeg' },
  { id: 6, title: '11 Days Chitral Grand Tour', days: '11 Days / 10 Nights', price: 'PKR 225,000', image: '/Home/chitralvalley.jpg.jpeg' },
];

export default function ChitralValleyToursPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden font-sans">
      
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Home/chitralvalley.jpg.jpeg"
            alt="Chitral Valley Tours"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            Chitral Valley Tour Packages 2025
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium drop-shadow mb-8">
            Kalash Valley & Cultural Tours
          </p>
          <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full" />
        </div>
      </section>

      <section className="w-full bg-[#f2f2f2] py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Discover Chitral Valley</h2>
            <div className="w-24 h-1 bg-[#a5292f] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-[16px]">
                Chitral Valley is a hidden gem in the northern region of Pakistan, known for its unique culture, stunning landscapes, and the fascinating Kalash people. Located in Khyber Pakhtunkhwa province, Chitral offers an authentic cultural experience unlike any other destination in Pakistan.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                The valley is home to the Kalash people, one of the world's most unique ethnic groups with their own distinct culture, language, and traditions. Visitors can experience their colorful festivals, traditional dances, and warm hospitality.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                The best time to visit Chitral is from May to October when the weather is pleasant and the Shandur Polo Festival takes place. The valley offers excellent opportunities for trekking, mountaineering, and cultural exploration.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/Home/chitralvalley.jpg.jpeg"
                alt="Chitral Valley Landscape"
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Places to Visit in Chitral</h2>
            <div className="w-24 h-1 bg-[#1368a5] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Kalash Valley',
              'Shandur Pass',
              'Garam Chashma Hot Springs',
              'Tirich Mir',
              'Chitral Fort',
              'Bumburet Valley',
              'Rumbur Valley',
              'Birir Valley',
              'Shahi Masjid',
              'Chitral Museum',
              'Ayun Valley',
              'Mastuj'
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Chitral Valley Tour Packages 2025</h2>
            <div className="w-24 h-1 bg-[#1368a5] mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Explore Chitral with our carefully curated tour packages</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Things to Do in Chitral</h2>
            <div className="w-24 h-1 bg-[#a5292f] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Kalash Culture Experience', desc: 'Visit Kalash villages and learn about their unique traditions' },
              { title: 'Shandur Polo Festival', desc: 'Witness the highest polo ground in the world' },
              { title: 'Trekking & Mountaineering', desc: 'Explore Tirich Mir and surrounding peaks' },
              { title: 'Hot Springs', desc: 'Relax in the natural hot springs of Garam Chashma' },
              { title: 'Photography', desc: 'Capture the stunning landscapes and cultural diversity' },
              { title: 'Local Cuisine', desc: 'Taste authentic Chitrali and Kalash dishes' }
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
          <h2 className="text-3xl font-extrabold mb-4">Ready to Explore Chitral Valley?</h2>
          <div className="w-16 h-1 bg-[#ffc107] mx-auto mb-6" />
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to customize your perfect Chitral Valley tour package
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
