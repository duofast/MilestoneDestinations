"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <header className="w-full bg-white border-b border-[#f2f2f2] sticky top-0 z-50 font-sans shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image 
              src="/Logo/milestonePrimaryLogo.jpg.jpeg" 
              alt="Milestone Destinations Logo" 
              width={200} 
              height={70} 
              className="object-contain h-12 w-auto md:h-16"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className={`text-[15px] font-bold transition-colors ${pathname === '/' ? 'text-[#a5292f]' : 'text-[#1e2024] hover:text-[#1368a5]'}`}>
            Home
          </Link>
          <Link href="/deals" className={`text-[15px] font-bold transition-colors ${pathname === '/deals' ? 'text-[#a5292f]' : 'text-[#1e2024] hover:text-[#1368a5]'}`}>
            Deals
          </Link>
          
          {/* Destinations Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-[15px] font-bold text-[#1e2024] hover:text-[#1368a5] transition-colors py-2">
              Destinations
              <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-[#f2f2f2] border border-gray-200 shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2 flex flex-col max-h-[400px] overflow-y-auto">
                <Link href="/destinations/azad-kashmir-tours" className="px-5 py-2 text-sm font-semibold text-[#1e2024] hover:bg-white hover:text-[#a5292f] transition-colors">Azad Kashmir Tours</Link>
                <Link href="/destinations/chitral-valley-tours" className="px-5 py-2 text-sm font-semibold text-[#1e2024] hover:bg-white hover:text-[#a5292f] transition-colors">Chitral Valley Tours</Link>
                <Link href="/destinations/fairy-meadows-pakistan" className="px-5 py-2 text-sm font-semibold text-[#1e2024] hover:bg-white hover:text-[#a5292f] transition-colors">Fairy Meadows</Link>
                <Link href="/destinations/hunza-valley-tours" className="px-5 py-2 text-sm font-semibold text-[#1e2024] hover:bg-white hover:text-[#a5292f] transition-colors">Hunza Valley Tours</Link>
                <Link href="/destinations/murree-tours" className="px-5 py-2 text-sm font-semibold text-[#1e2024] hover:bg-white hover:text-[#a5292f] transition-colors">Murree Tours</Link>
                <Link href="/destinations/naran-kaghan-tours" className="px-5 py-2 text-sm font-semibold text-[#1e2024] hover:bg-white hover:text-[#a5292f] transition-colors">Naran Kaghan Tours</Link>
                <Link href="/destinations/skardu-valley-tours" className="px-5 py-2 text-sm font-semibold text-[#1e2024] hover:bg-white hover:text-[#a5292f] transition-colors">Skardu Valley Tours</Link>
                <Link href="/destinations/swat-valley-tours" className="px-5 py-2 text-sm font-semibold text-[#1e2024] hover:bg-white hover:text-[#a5292f] transition-colors">Swat Valley Tours</Link>
              </div>
            </div>
          </div>

          {/* Tours Type Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-[15px] font-bold text-[#1e2024] hover:text-[#1368a5] transition-colors py-2">
              Tours Type
              <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-[#f2f2f2] border border-gray-200 shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2 flex flex-col">
                <Link href="/tours/1-day-tours" className="px-5 py-2 text-sm font-semibold text-[#1e2024] hover:bg-white hover:text-[#a5292f] transition-colors">1 Day Tours</Link>
                <Link href="/tours/foreigner-tours" className="px-5 py-2 text-sm font-semibold text-[#1e2024] hover:bg-white hover:text-[#a5292f] transition-colors">Foreigner Tours</Link>
              </div>
            </div>
          </div>

          <Link href="/car-rentals" className={`text-[15px] font-bold transition-colors ${pathname === '/car-rentals' ? 'text-[#a5292f]' : 'text-[#1e2024] hover:text-[#1368a5]'}`}>
            Car Rentals
          </Link>
        </nav>

        {/* Right Section (Search & Button) */}
        <div className="hidden lg:flex items-center space-x-5">
          <button aria-label="Search" className="text-[#1e2024] hover:text-[#a5292f] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          
          <Link href="/enquire" className="bg-[#ffc107] hover:bg-[#ffb300] text-black font-bold text-[14px] px-6 py-2.5 rounded shadow-sm transition-transform hover:scale-105">
             ENQUIRE NOW
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-4">
          <button aria-label="Search" className="text-[#1e2024] hover:text-[#a5292f]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <button onClick={toggleMobileMenu} className="text-[#1e2024] hover:text-[#a5292f] focus:outline-none p-1">
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden w-full bg-[#f2f2f2] overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[800px] border-t border-gray-200' : 'max-h-0'}`}>
        <nav className="flex flex-col px-4 pt-2 pb-6 space-y-1">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`block py-3 text-[15px] font-bold border-b border-gray-300 ${pathname === '/' ? 'text-[#a5292f]' : 'text-[#1e2024] hover:text-[#1368a5]'}`}>
            Home
          </Link>
          <Link href="/deals" onClick={() => setIsMobileMenuOpen(false)} className={`block py-3 text-[15px] font-bold border-b border-gray-300 ${pathname === '/deals' ? 'text-[#a5292f]' : 'text-[#1e2024] hover:text-[#1368a5]'}`}>
            Deals
          </Link>
          
          {/* Mobile Dropdown Destinations */}
          <div className="border-b border-gray-300">
            <button 
              onClick={() => toggleDropdown('destinations')}
              className="w-full flex items-center justify-between py-3 text-[15px] font-bold text-[#1e2024] hover:text-[#1368a5]"
            >
              Destinations
              <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'destinations' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 'destinations' ? 'max-h-[500px] pb-3' : 'max-h-0'}`}>
              <div className="bg-white px-4 py-2 flex flex-col space-y-3 rounded border border-gray-200 mt-2">
                <Link href="/destinations/azad-kashmir-tours" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#a5292f]">Azad Kashmir Tours</Link>
                <Link href="/destinations/chitral-valley-tours" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#a5292f]">Chitral Valley Tours</Link>
                <Link href="/destinations/fairy-meadows-pakistan" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#a5292f]">Fairy Meadows</Link>
                <Link href="/destinations/hunza-valley-tours" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#a5292f]">Hunza Valley Tours</Link>
                <Link href="/destinations/murree-tours" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#a5292f]">Murree Tours</Link>
                <Link href="/destinations/naran-kaghan-tours" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#a5292f]">Naran Kaghan Tours</Link>
                <Link href="/destinations/skardu-valley-tours" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#a5292f]">Skardu Valley Tours</Link>
                <Link href="/destinations/swat-valley-tours" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#a5292f]">Swat Valley Tours</Link>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Tours Type */}
          <div className="border-b border-gray-300">
            <button 
              onClick={() => toggleDropdown('tours')}
              className="w-full flex items-center justify-between py-3 text-[15px] font-bold text-[#1e2024] hover:text-[#1368a5]"
            >
              Tours Type
              <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'tours' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === 'tours' ? 'max-h-[300px] pb-3' : 'max-h-0'}`}>
              <div className="bg-white px-4 py-2 flex flex-col space-y-3 rounded border border-gray-200 mt-2">
                <Link href="/tours/1-day-tours" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#a5292f]">1 Day Tours</Link>
                <Link href="/tours/foreigner-tours" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#a5292f]">Foreigner Tours</Link>
              </div>
            </div>
          </div>

          <Link href="/car-rentals" onClick={() => setIsMobileMenuOpen(false)} className={`block py-3 text-[15px] font-bold border-b border-gray-300 mb-2 ${pathname === '/car-rentals' ? 'text-[#a5292f]' : 'text-[#1e2024] hover:text-[#1368a5]'}`}>
            Car Rentals
          </Link>

          <div className="pt-4 pb-2">
            <Link href="/enquire" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center w-full bg-[#ffc107] hover:bg-[#ffb300] text-black font-bold text-[15px] py-3 rounded shadow-sm transition-transform hover:scale-[1.02]">
              ENQUIRE NOW
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
