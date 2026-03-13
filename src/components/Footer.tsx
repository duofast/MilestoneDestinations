import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e2024] text-[#f2f2f2] font-sans antialiased text-sm pt-16 pb-6 border-t border-[#1e2024]">
      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Social Icons */}
        <div className="flex space-x-3 w-full md:w-auto">
          <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#a5292f] hover:border-[#a5292f] transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#a5292f] hover:border-[#a5292f] transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>
          </a>
          <a href="#" aria-label="Pinterest" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#a5292f] hover:border-[#a5292f] transition-all">
             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.425 2.977 7.425 6.953 0 4.156-2.616 7.502-6.248 7.502-1.221 0-2.373-.635-2.766-1.383l-.754 2.875c-.274 1.045-1.01 2.348-1.505 3.144 1.156.349 2.378.537 3.639.537 6.627 0 11.989-5.364 11.989-11.993C23.993 5.367 18.636 0 12.017 0z"/></svg>
          </a>
          <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#a5292f] hover:border-[#a5292f] transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
        </div>

        {/* Concierge Info */}
        <div className="flex flex-col w-full md:w-auto">
          <h2 className="text-xl sm:text-2xl font-normal text-white uppercase tracking-wide leading-tight mb-4">
            SPEAK TO OUR<br />
            DEDICATED<br />
            CONCIERGE TEAM
          </h2>
          <div className="space-y-4 text-white font-medium text-[15px]">
            <a href="tel:+923373733732" className="block hover:text-[#a5292f] transition-colors">
              +92 337 3733732
            </a>
            <a href="mailto:sales@milestonedestinations.com" className="block hover:text-[#a5292f] transition-colors font-bold underline underline-offset-4 decoration-2">
              sales@milestonedestinations.com
            </a>
            <p className="leading-snug text-[15px] font-normal mt-3 text-white">
              Office E2, 5th Floor, Khalifa Heights,<br/>
              Chaklala Road near Committee Chowk,<br/>
              Rawalpindi
            </p>
          </div>
        </div>

        {/* Navigation Links Grid */}
        <div className="w-full md:w-auto grid grid-cols-2 gap-x-12 sm:gap-x-20 gap-y-4 text-[13px] font-bold text-white uppercase tracking-wider">
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-[#a5292f] hover:translate-x-1 transition-all">HOME</a>
            <a href="#" className="hover:text-[#a5292f] hover:translate-x-1 transition-all">GROUP TOURS</a>
            <a href="#" className="hover:text-[#a5292f] hover:translate-x-1 transition-all">CAR RENTALS</a>
            <a href="#" className="hover:text-[#a5292f] hover:translate-x-1 transition-all">DESTINATIONS</a>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-[#a5292f] hover:translate-x-1 transition-all">HONEYMOONS</a>
            <a href="#" className="hover:text-[#a5292f] hover:translate-x-1 transition-all">HOTELS IN<br/>PAKISTAN</a>
            <a href="#" className="hover:text-[#a5292f] hover:translate-x-1 transition-all">BLOG</a>
            <a href="#" className="hover:text-[#a5292f] hover:translate-x-1 transition-all">NARAN KAGHAN<br/>TOURS</a>
          </div>
        </div>

      </div>

      {/* Description Section */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mt-16 text-center lg:text-left">
        <p className="text-[#f2f2f2] text-[13px] sm:text-sm leading-relaxed max-w-[1100px] mx-auto">
          <strong className="font-semibold">Milestone Destination</strong> brings an opportunity to visit Extra Ordinary Pakistan with supreme tour services. As the pioneers of Tour Operator in Pakistan, <strong className="font-semibold">Milestone Destination</strong> is offering services to tourism lovers since 2012. From Couple Tour to Family Tour, Cooperate Group Tours to Honeymoon Tour, we have an extensive range of Pakistan Tour packages to all the Northern areas of Pakistan, that is Hunza, Skardu, Swat, Chitral, Shogran, Murree, and especially to Naran Kaghan. Also, we featured Lahore, Islamabad, and Karachi Sightseeing Tours to witness the rich culture of Pakistan.
        </p>
      </div>

      {/* Bottom Timings Line Section */}
      <div className="max-w-[1200px] mx-auto w-[calc(100%-3rem)] mt-12 pt-6 border-t border-[#f2f2f2]/30">
        <div className="flex flex-wrap justify-between sm:justify-center lg:justify-between items-center text-[12px] sm:text-[13px] text-[#f2f2f2] font-normal gap-4">
          <span>Mon: 9am-7pm</span>
          <span>Tue: 9am-7pm</span>
          <span>Wed: 9am-7pm</span>
          <span>Thu: 9am-7pm</span>
          <span>Fri: 9am-7pm</span>
          <span>Sat: 9am-6pm</span>
          <span>Sun: 9am-6pm</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
