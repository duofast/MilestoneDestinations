import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// === DATA MOCKS FOR DEALS ===
const honeymoonDeals = [
  { id: 1, title: 'Hunza Valley & Naltar Valley Standard Tour', days: '5 Days / 4 Nights', price: 'Enquire Now', image: '/Home/hunzavalley.jpg.jpeg' },
  { id: 2, title: 'Murree, Nathia Gali & Swat Valley Couple Tour', days: '5 Days / 4 Nights', price: 'Enquire Now', image: '/Home/murree.jpg.jpeg' },
  { id: 3, title: 'Murree & Shogran Tour', days: '3 Days / 2 Nights', price: 'Enquire Now', image: '/Home/kaghanvalley.jpg.jpeg' },
  { id: 4, title: 'Malam Jabba Swat Tour', days: '3 Days / 2 Nights', price: 'Enquire Now', image: '/Home/swatvalley.jpg.jpeg' },
  { id: 5, title: 'Swat, Kalam & Malam Jabba Deluxe Tour', days: '5 Days / 4 Nights', price: 'Enquire Now', image: '/Home/swatvalley.jpg.jpeg' },
  { id: 6, title: 'Swat & Malam Jabba Deluxe Tour', days: '3 Days / 2 Nights', price: 'Enquire Now', image: '/Home/swatvalley.jpg.jpeg' },
  { id: 7, title: 'Patriata, Murree and Nathia Gali Tour', days: '3 Days / 2 Nights', price: 'Enquire Now', image: '/Home/murree.jpg.jpeg' },
];

export default function DealsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Home/fairymeadows.jpg.jpeg"
            alt="Beautiful landscape for honeymoon"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text readability */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            Honeymoon Deals 2025
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium drop-shadow mb-8">
            Murree | Swat | Hunza | Couple Tour Packages
          </p>
          <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full" />
        </div>
      </section>

      {/* 2. INTRO TEXT SECTION */}
      <section className="w-full bg-[#f2f2f2] py-16 px-4">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-6">Avail Cheap Couple Tour Packages 2025 for Swat, Hunza, and Murree</h2>
          <p className="text-gray-600 leading-relaxed text-[16px] mb-4">
            As the wedding season is coming up, we are planning to give amazing Honeymoon Tour Deals for our customers so they can enjoy the perfect time with their spouse. Check out the Pakistan Travel Package for Honeymoon Tours. Milestone Destinations urges cheap tours and top-quality services to the northern areas of Pakistan.
          </p>
          <p className="text-gray-600 leading-relaxed text-[16px] mb-4">
            Packages range from honeymoon trips to Swat, Hunza, and Murree, where you can fully explore every region of northern Pakistan with complete privacy. Whether it is a scenic adventure, a mountain trip, or camping under a sky full of stars, you should design a wonderful honeymoon trip as soon as possible.
          </p>
          <div className="text-center mt-8">
            <span className="text-[#a5292f] font-bold tracking-wider uppercase text-sm mb-2 block">Our Top Destinations</span>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link href="/destinations" className="bg-white border-2 border-[#1368a5] text-[#1368a5] hover:bg-[#1368a5] hover:text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">Hunza Valley</Link>
              <Link href="/destinations" className="bg-white border-2 border-[#1368a5] text-[#1368a5] hover:bg-[#1368a5] hover:text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">Murree Galliyat</Link>
              <Link href="/destinations" className="bg-white border-2 border-[#1368a5] text-[#1368a5] hover:bg-[#1368a5] hover:text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">Swat Kalam</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEALS GRID SECTION */}
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-[#a5292f] font-bold tracking-wider uppercase text-sm mb-2 block">Exclusive Offers</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Latest Honeymoon Tour Deals</h2>
            <div className="w-24 h-1 bg-[#1368a5] mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">For honeymooners and families, we have compiled a list of reasonable tours. The number of days can be changed according to the customer&apos;s preferences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {honeymoonDeals.map((deal) => (
               <div key={deal.id} className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group">
                 <div className="relative h-60 w-full overflow-hidden">
                   <Image 
                     src={deal.image} 
                     alt={deal.title} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   <div className="absolute top-4 right-4 bg-[#a5292f] text-white text-xs font-bold px-3 py-1 rounded shadow-sm z-10">
                     {deal.days}
                   </div>
                   {/* Gradient Overlay for hover effect */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </div>
                 <div className="p-6 flex flex-col flex-grow">
                   <h3 className="text-xl font-bold text-[#1e2024] mb-3 leading-snug hover:text-[#1368a5] transition-colors cursor-pointer">{deal.title}</h3>
                   <div className="mt-auto">
                     <div className="flex justify-between items-center mb-4 pt-4 border-t border-gray-100">
                       <div className="flex flex-col">
                         <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Price</span>
                         <span className="text-lg font-extrabold text-[#a5292f]">{deal.price}</span>
                       </div>
                       <Link href="/enquire" className="bg-[#1368a5] hover:bg-[#1e2024] text-white text-sm font-bold py-2 px-5 rounded transition-colors duration-300">
                         View Details
                       </Link>
                     </div>
                   </div>
                 </div>
               </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CONTACT / MORE INFO SECTION */}
      <section className="w-full bg-[#1e2024] py-16 px-4 text-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold mb-4">Want to learn more?</h2>
            <div className="w-16 h-1 bg-[#ffc107] mb-6" />
            <p className="text-gray-300 mb-6">
              We&apos;re here to help whether you need information or you already have a travel program in mind. Speak to our dedicated concierge team to customize your perfect honeymoon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+923373733732" className="flex items-center justify-center bg-[#a5292f] hover:bg-white hover:text-[#a5292f] text-white font-bold py-3 px-6 rounded transition-colors duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +92 337 3733732
              </a>
              <Link href="/enquire" className="flex items-center justify-center border-2 border-[#1368a5] bg-transparent hover:bg-[#1368a5] text-white font-bold py-3 px-6 rounded transition-colors duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email Us
              </Link>
            </div>
          </div>
          
          <div className="flex-1 bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-[#ffc107]">Milestone Destinations</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 text-[#1368a5] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Office E2, 5th Floor, Khalifa Heights, Chaklala Road near Committee Chowk, Rawalpindi</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#1368a5] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>sales@milestonedestinations.com</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
