import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// === DATA FOR CAR RENTALS ===
const carTypes = [
  { id: 1, name: 'Toyota Hiace (Grand Cabin, Hi-roof)', type: 'Van / Minibus', image: '/Home/murree.jpg.jpeg' },
  { id: 2, name: 'Suzuki APV', type: 'Family Van', image: '/Home/kaghanvalley.jpg.jpeg' },
  { id: 3, name: 'Toyota Coaster', type: 'Saloon Coaster', image: '/Home/skarduvalley.jpg.jpeg' },
  { id: 4, name: 'Honda BR-V', type: 'SUV / Crossover', image: '/Home/azadkhasmir.jpg.jpeg' },
  { id: 5, name: 'Honda City', type: 'Sedan', image: '/Home/swatvalley.jpg.jpeg' },
  { id: 6, name: 'Toyota Corolla GLI', type: 'Sedan', image: '/Home/hunzavalley.jpg.jpeg' },
  { id: 7, name: 'Toyota Land Cruiser Prado', type: 'Luxury SUV', image: '/Home/fairymeadows.jpg.jpeg' },
  { id: 8, name: 'Toyota Hilux Revo / Vego', type: '4x4 Truck', image: '/Home/chitralvalley.jpg.jpeg' },
];

const rentalServices = [
  { id: 1, title: 'Islamabad International Airport', desc: 'Airport transfers to Islamabad, Rawalpindi, or door-to-door pick Up/drop off.' },
  { id: 2, title: 'Islamabad to Lahore', desc: 'Top-notch fleet services for a luxurious and affordable trip to Lahore.' },
  { id: 3, title: 'Islamabad to Gilgit', desc: 'Rent any car or jeep for the mountainous valley of Gilgit.' },
  { id: 4, title: 'Islamabad to Murree', desc: 'Professional drivers for an amazing ride to Murree and Nathiagali.' },
  { id: 5, title: 'Islamabad to Naran Kaghan', desc: 'Explore Kaghan with luxurious cars suitable for mountainous terrains.' },
  { id: 6, title: 'Islamabad to Neelum Valley', desc: 'Book a 4x4 or jeep for a comfortable trip to the beautiful Neelum Valley.' },
  { id: 7, title: 'Islamabad to Hunza Valley', desc: 'Smooth rides to Hunza Valley with experienced drivers who know the roads.' },
  { id: 8, title: 'Islamabad to Swat Kalam', desc: 'Well-maintained vehicles ready for the roads of Swat and Kalam.' },
  { id: 9, title: 'Islamabad to Skardu', desc: 'Roam around the extreme north with our perfectly maintained cars.' },
];

export default function CarRentalsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#1e2024]">
          <Image
            src="/Home/skarduvalley.jpg.jpeg"
            alt="Rent a car in Islamabad with Milestone Destinations"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl pt-12">
          <span className="text-[#ffc107] font-bold tracking-wider uppercase text-sm mb-2 block">Premium Fleet</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            Rent A Car Islamabad
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium drop-shadow mb-8">
            Best Rent A Car In Islamabad & Rawalpindi Services
          </p>
          <div className="w-32 h-1.5 bg-[#a5292f] mx-auto rounded-full" />
        </div>
      </section>

      {/* 2. ABOUT RENT A CAR SECTION */}
      <section className="w-full bg-[#f2f2f2] py-20 px-4">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-6">Cheap Affordable Rent A Car in Islamabad</h2>
          <p className="text-gray-600 leading-relaxed text-[16px] mb-6">
            Milestone Destinations offers the best Rent a car service in Islamabad for your trips and tours. Islamabad is being well maintained and the second most beautiful capital in the world. So the service within the capital should be the top class. We currently have ample car rental solutions for all visitors arriving in Islamabad.
          </p>
          <p className="text-gray-600 leading-relaxed text-[16px] mb-8">
            Depending on the span of your visit, you can choose a car for rent in Islamabad from an hourly, daily, weekly, or even a monthly plan that best suits your requirements. We care for our valued customers; that’s why we accommodate our clients by providing them cheap and affordable cars for rent in Islamabad. 
          </p>
          <div className="flex flex-wrap justify-center gap-4">
              <Link href="/enquire" className="bg-[#1368a5] hover:bg-[#a5292f] text-white font-bold py-3 px-8 rounded transition-colors duration-300 shadow-md">
                Book a Car Now
              </Link>
          </div>
        </div>
      </section>

      {/* 3. FLEET TYPES GRID */}
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-[#a5292f] font-bold tracking-wider uppercase text-sm mb-2 block">Our Vehicles</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2024] mb-4">Types Of Cars For Rent In Islamabad</h2>
            <div className="w-24 h-1 bg-[#1368a5] mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              We own an extensive line of well-maintained vehicles for rent in Islamabad to serve our prestigious clients. We offer cars of all types and capabilities including Toyota, Honda, Suzuki, and Mercedes. We provide different kinds of luxurious cars for rent in Islamabad along with professional drivers to provide you a safe and comfortable journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {carTypes.map((car) => (
               <div key={car.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                 <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                   <Image 
                     src={car.image} 
                     alt={car.name} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                 </div>
                 <div className="p-5 text-center border-t-2 border-transparent group-hover:border-[#1368a5] transition-colors">
                   <h3 className="text-lg font-bold text-[#1e2024] mb-1">{car.name}</h3>
                   <span className="text-sm font-semibold text-[#a5292f] uppercase tracking-wide">{car.type}</span>
                 </div>
               </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-gray-600 max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="mb-2"><strong>Traveling to the North?</strong></p>
            <p className="text-sm leading-relaxed">
              We provide our Islamabad Rent Car services with experienced drivers, known to those hilly and curved roads of northern areas of Pakistan. No matter whether you require a small sedan or a large 4X4 SUV, Milestone Destinations arranges a perfect vehicle for your desired trip.
            </p>
          </div>

        </div>
      </section>

      {/* 4. SERVICES / ROUTES SECTION */}
      <section className="w-full bg-[#1e2024] py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#ffc107] font-bold tracking-wider uppercase text-sm mb-2 block">Popular Routes</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Car Rental Services & Destinations</h2>
            <div className="w-24 h-1 bg-[#a5292f] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentalServices.map((service) => (
              <div key={service.id} className="bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-[#a5292f] p-2 rounded truncate mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CONTACT CTA */}
      <section className="w-full bg-[#1368a5] py-16 px-4 text-white text-center border-t-4 border-[#a5292f]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-extrabold mb-4 drop-shadow-md">Ready to hit the road?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact us today to get the latest Rent a Car Islamabad Rates. Our rates differ based on your choice of vehicle and the number of days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:+923373733732" className="flex items-center justify-center bg-white text-[#1368a5] hover:bg-[#ffc107] hover:text-[#1e2024] font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call +92 337 3733732
            </a>
            <Link href="/enquire" className="flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1368a5] font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Get a Quote Online
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
