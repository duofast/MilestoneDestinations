import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tourPackages = [
  { id: 1, title: '4 Days Hunza Valley Standard Tour', days: '4 Days / 3 Nights', price: 'PKR 95,000', image: '/Home/hunzavalley.jpg.jpeg' },
  { id: 2, title: '5 Days Hunza & Naltar Valley Tour', days: '5 Days / 4 Nights', price: 'PKR 115,000', image: '/Home/hunzavalley.jpg.jpeg' },
  { id: 3, title: '6 Days Hunza & Khunjerab Pass', days: '6 Days / 5 Nights', price: 'PKR 135,000', image: '/Home/hunzavalley.jpg.jpeg' },
  { id: 4, title: '7 Days Hunza & Skardu Tour', days: '7 Days / 6 Nights', price: 'PKR 155,000', image: '/Home/hunzavalley.jpg.jpeg' },
  { id: 5, title: '8 Days Complete Hunza Exploration', days: '8 Days / 7 Nights', price: 'PKR 175,000', image: '/Home/hunzavalley.jpg.jpeg' },
  { id: 6, title: '10 Days Hunza, Skardu & Fairy Meadows', days: '10 Days / 9 Nights', price: 'PKR 225,000', image: '/Home/hunzavalley.jpg.jpeg' },
];

export default function HunzaValleyToursPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden font-sans">
      
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Home/hunzavalley.jpg.jpeg"
            alt="Hunza Valley Tours"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            Hunza Valley Tour Packages 2025
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium drop-shadow mb-8">
            The Crown Jewel of Northern Pakistan
          </p>
          <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full" />
        </div>
      </section>

      <section className="w-full bg-[#f2f2f2] py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Discover Hunza Valley</h2>
            <div className="w-24 h-1 bg-[#a5292f] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-[16px]">
                Hunza Valley is one of Pakistan's most beautiful and popular tourist destinations, located in the Gilgit-Baltistan region at an elevation of approximately 2,500 meters. Known for its stunning landscapes, rich culture, and friendly people, Hunza offers an unforgettable travel experience.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                The valley is famous for its apricot orchards, ancient forts, and breathtaking views of snow-capped peaks including Rakaposhi, Ultar Sar, and Ladyfinger Peak. The Hunza people are known for their longevity and hospitality, making this destination both culturally and naturally rich.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                The best time to visit Hunza is from April to October when the weather is pleasant and the valley is in full bloom. Spring brings cherry blossoms, while autumn offers golden landscapes and the harvest season.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/Home/hunzavalley.jpg.jpeg"
                alt="Hunza Valley Landscape"
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Places to Visit in Hunza</h2>
            <div className="w-24 h-1 bg-[#1368a5] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Baltit Fort',
              'Altit Fort',
              'Khunjerab Pass',
              'Rakaposhi Base Camp',
              'Attabad Lake',
              'Passu Cones',
              'Hussaini Suspension Bridge',
              'Gulmit',
              'Karimabad',
              'Duikar Viewpoint',
              'Hopper Glacier',
              'Borith Lake'
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Hunza Valley Tour Packages 2025</h2>
            <div className="w-24 h-1 bg-[#1368a5] mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Explore the beauty of Hunza with our carefully curated tour packages</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Things to Do in Hunza</h2>
            <div className="w-24 h-1 bg-[#a5292f] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Fort Exploration', desc: 'Visit ancient Baltit and Altit Forts' },
              { title: 'Mountain Viewing', desc: 'Enjoy panoramic views of Rakaposhi and surrounding peaks' },
              { title: 'Cultural Experience', desc: 'Learn about Hunza culture and traditions' },
              { title: 'Apricot Harvest', desc: 'Experience the famous Hunza apricot season' },
              { title: 'Trekking', desc: 'Explore scenic trails and mountain paths' },
              { title: 'Photography', desc: 'Capture stunning landscapes and cultural moments' }
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
          <h2 className="text-3xl font-extrabold mb-4">Ready to Explore Hunza Valley?</h2>
          <div className="w-16 h-1 bg-[#ffc107] mx-auto mb-6" />
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to customize your perfect Hunza Valley tour package
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
