import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// === DATA MOCKS ===
const destinations = [
  { id: 1, name: 'Hunza Valley', image: '/Home/hunzavalley.jpg.jpeg' },
  { id: 2, name: 'Skardu Valley', image: '/Home/skarduvalley.jpg.jpeg' },
  { id: 3, name: 'Kaghan Valley', image: '/Home/kaghanvalley.jpg.jpeg' },
  { id: 4, name: 'Swat Valley', image: '/Home/swatvalley.jpg.jpeg' },
  { id: 5, name: 'Azad Kashmir', image: '/Home/azadkhasmir.jpg.jpeg' },
  { id: 6, name: 'Murree Hills', image: '/Home/murree.jpg.jpeg' },
];

const packages = [
  { id: 1, title: '5 Days Swat Kalam Honeymoon Tour', days: '5 Days / 4 Nights', price: 'PKR 85,000', image: '/Home/swatvalley.jpg.jpeg' },
  { id: 2, title: '7 Days Skardu Hunza Honeymoon Tour', days: '7 Days / 6 Nights', price: 'PKR 145,000', image: '/Home/hunzavalley.jpg.jpeg' },
  { id: 3, title: '3 Days Neelum Valley Trip', days: '3 Days / 2 Nights', price: 'PKR 45,000', image: '/Home/azadkhasmir.jpg.jpeg' },
];

const faqs = [
  { id: 1, question: 'When should I book my tour?', answer: 'We recommend booking at least 2 to 4 weeks in advance, especially during the peak summer and spring seasons.' },
  { id: 2, question: 'What is included in the tour package price?', answer: 'Typically, it includes accommodation, breakfast, dedicated transport with driver/guide, and toll taxes. Please check specific package details for inclusions.' },
  { id: 3, question: 'How do I make payment?', answer: 'Payment can be made via bank transfer, online credit/debit card portals, or cash at our rawalpindi office.' },
  { id: 4, question: 'Can I make changes to my booking?', answer: 'Yes, changes can be made up to 7 days before departure subject to availability and our amendment policy.' },
];

const testimonials = [
  { id: 1, name: 'Sarah Ahmed', location: 'Karachi', review: 'Booked my honeymoon package to Skardu with Milestone Destinations. Everything from the hotel to the transfers was perfect. Highly recommended!', rating: 5 },
  { id: 2, name: 'John Doe', location: 'London', review: 'An incredible 10 days exploring the breathtaking Hunza Valley. The guides were exceptionally knowledgeable and friendly.', rating: 5 },
  { id: 3, name: 'Ali Khan', location: 'Lahore', review: 'A seamless experience planning our family corporate retreat in Bhurban. We didn\'t have to worry about a single detail.', rating: 4 },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Home/homeMain.jpeg"
            alt="Beautiful landscape of Northern Pakistan"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            Pakistan Tour Packages 2025
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium drop-shadow mb-12">
            Honeymoon &amp; Family Trips
          </p>
        </div>

        {/* Search Bar / Booking Form (Positioned at bottom) */}
        <div className="absolute -bottom-[60px] md:-bottom-[40px] left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-4xl bg-white shadow-xl rounded-lg p-4 md:p-6 border border-[#f2f2f2]">
          <form className="flex flex-col md:flex-row items-center justify-between gap-4">

            <div className="flex-1 w-full relative">
              <label className="text-xs uppercase font-bold text-gray-500 mb-1 block">Where To</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Hunza Valley"
                  className="w-full border-b-2 border-gray-200 py-2 pl-8 pr-2 focus:outline-none focus:border-[#a5292f] transition-colors bg-transparent text-gray-800 font-medium"
                />
                <svg className="w-5 h-5 absolute left-1 top-2.5 text-[#1368a5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
            </div>

            <div className="flex-[0.8] w-full relative">
              <label className="text-xs uppercase font-bold text-gray-500 mb-1 block">Month</label>
              <div className="relative">
                <select className="w-full border-b-2 border-gray-200 py-2 pl-8 pr-2 focus:outline-none focus:border-[#a5292f] transition-colors bg-transparent text-gray-800 font-medium appearance-none cursor-pointer">
                  <option value="">Any Month</option>
                  <option value="jan">January</option>
                  <option value="feb">February</option>
                  <option value="mar">March</option>
                  <option value="apr">April</option>
                  <option value="may">May</option>
                  <option value="jun">June</option>
                  <option value="jul">July</option>
                </select>
                <svg className="w-5 h-5 absolute left-1 top-2.5 text-[#1368a5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
            </div>

            <div className="flex-[0.8] w-full relative">
              <label className="text-xs uppercase font-bold text-gray-500 mb-1 block">Travelers</label>
              <div className="relative">
                <select className="w-full border-b-2 border-gray-200 py-2 pl-8 pr-2 focus:outline-none focus:border-[#a5292f] transition-colors bg-transparent text-gray-800 font-medium appearance-none cursor-pointer">
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4+">4+ Persons</option>
                </select>
                <svg className="w-5 h-5 absolute left-1 top-2.5 text-[#1368a5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
            </div>

            <div className="w-full md:w-auto mt-2 md:mt-0 self-end">
              <button type="button" className="w-full bg-[#1368a5] hover:bg-[#a5292f] text-white font-bold py-3.5 px-8 rounded transition-all duration-300 shadow-md">
                Search Tours
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* Spacer for Search Box */}
      <div className="h-24 md:h-20 w-full bg-[#f2f2f2]" />

      {/* 2. TOP DESTINATIONS SECTION */}
      <section className="w-full bg-[#f2f2f2] py-16 px-4">
        <div className="max-w-[1200px] mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Top Destinations 2026</h2>
            <div className="w-24 h-1 bg-[#a5292f] mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Discover the beauty of Pakistan with our hand-picked and top-rated destinations for your next adventure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {destinations.map((dest) => (
              <div key={dest.id} className="group relative h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-2">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold tracking-wide group-hover:text-[#ffc107] transition-colors">{dest.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/destinations" className="inline-block border-2 border-[#1368a5] text-[#1368a5] hover:bg-[#1368a5] hover:text-white font-bold py-3 px-8 rounded transition-colors duration-300">
              View All Destinations
            </Link>
          </div>

        </div>
      </section>

      {/* 3. BEST DEALS / PACKAGES SECTION */}
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">

          <div className="text-center mb-12">
            <span className="text-[#a5292f] font-bold tracking-wider uppercase text-sm mb-2 block">Exclusive Offers</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Best Deals For 2025</h2>
            <div className="w-24 h-1 bg-[#1368a5] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
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
                      <div className="flex items-center space-x-1 text-[#ffc107]">
                        {/* Stars */}
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                    <Link href="/enquire" className="block text-center w-full bg-[#f2f2f2] hover:bg-[#ffc107] text-[#1e2024] font-bold py-3 rounded transition-colors duration-300">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CONTENT BLOCK: HONEYMOON PACKAGES */}
      <section className="w-full bg-[#1e2024] py-20 px-4 text-white">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="flex-1 space-y-6">
            <span className="text-[#ffc107] font-bold tracking-wider uppercase text-sm">Romantic Getaways</span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">We Proudly Announce The Best 2025 Pakistan Tour Packages & Honeymoon Tour Packages From Pakistan</h2>
            <div className="w-20 h-1 bg-[#a5292f] rounded-full" />
            <p className="text-gray-300 leading-relaxed text-[15px]">
              Nothing is more satisfying than a Perfect Pakistan Travel Package. Discover the Beauty of Pakistan With Our Top Pakistan Tour Packages. See Pakistan Tours provides cheap affordable Pakistan Tour & Honeymoon Packages in Pakistan for you and your beloved ones.
            </p>
            <p className="text-gray-300 leading-relaxed text-[15px]">
              We offer exclusive Skardu tours, Hunza Valley trips, Swat Valley exploration, and Neelum Valley escapades, specifically curated to provide the most memorable experiences.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ffc107] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-[15px] font-medium">Customized Honeymoon Packages from Pakistan</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ffc107] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-[15px] font-medium">Top 20 Holiday Tour Destinations Curated by Experts</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#ffc107] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-[15px] font-medium">Safe, Secure & Luxurious Transport Provided</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link href="/deals" className="inline-block bg-[#a5292f] hover:bg-white hover:text-[#a5292f] text-white font-bold py-3 px-8 rounded transition-colors duration-300 shadow-lg">
                Explore Honeymoon Packages
              </Link>
            </div>
          </div>

          <div className="flex-1 relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Home/azadkhasmir.jpg.jpeg"
              alt="Couple in Naran Kaghan Valley"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* 5. MULTI-CITY & NATURE SHOWCASE */}
      <section className="w-full bg-white py-20 px-4 pt-24">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

          <div className="flex-1 space-y-6">
            <span className="text-[#1368a5] font-bold tracking-wider uppercase text-sm">Create Lasting Memories</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] leading-tight">Our Most Popular Tours: Pakistan Tours for Couples and Families</h2>
            <div className="w-20 h-1 bg-[#1368a5] rounded-full" />
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Experience the diversity of Pakistan. Our multi-city tours let you see the Best of Northern Pakistan – bringing together the majestic landscapes of Hunza Skardu Road Trips, the lush greenery of Naran Kaghan Valley, and the spiritual tranquility of Swat Valley.
            </p>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Whether you want an adventurous trip to Fairy Meadows, a relaxing stay in the Murree Hills, or a cultural exploration in Lahore, our packages showcase the very Best of Nature and culture that Pakistan has to offer.
            </p>
            <div className="pt-4">
              <Link href="/deals" className="inline-block bg-[#1368a5] hover:bg-[#1e2024] text-white font-bold py-3 px-8 rounded transition-colors duration-300 shadow-md">
                See All Family Packages
              </Link>
            </div>
          </div>

          <div className="flex-1 relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Home/murree.jpg.jpeg"
              alt="Family admiring the scenery in Skardu"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="w-full bg-[#1368a5] py-20 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-[#f2f2f2] font-semibold tracking-wider uppercase text-sm mb-2 block">Customer Stories</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {testimonials.map((test) => (
              <div key={test.id} className="bg-white p-8 rounded-xl shadow-lg relative">
                <svg className="w-10 h-10 text-gray-200 absolute top-6 right-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" /></svg>
                <div className="flex space-x-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#ffc107] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{test.review}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#a5292f] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e2024]">{test.name}</h4>
                    <p className="text-sm text-gray-500">{test.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (Interactive Accordion) */}
      <section className="w-full bg-[#f2f2f2] py-20 px-4">
        <div className="max-w-[800px] mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Booking Your Tour Package – FAQs</h2>
            <div className="w-24 h-1 bg-[#a5292f] mx-auto rounded-full" />
            <p className="mt-4 text-gray-600">Got questions? We have got you covered.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.id} className="group bg-white rounded-lg shadow-sm border border-gray-100 open:border-[#1368a5] transition-all">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-[#1e2024] group-open:text-[#1368a5]">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0">
                    <svg className="h-5 w-5 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    <svg className="hidden h-5 w-5 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-[15px] leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
