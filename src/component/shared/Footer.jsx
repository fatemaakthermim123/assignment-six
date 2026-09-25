import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
const Footer = () => {
    return (
       <footer className="bg-[#111318] text-white">
  <div className="px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center justify-between gap-6 py-6 sm:flex-row">

      {/* Left Side */}
      <div className="flex items-center gap-3">
        
        <Image src={logo} alt='logo'/>

        <h2 className="text-xl sm:text-2xl">
          FITLOG
        </h2>
      </div>

      {/* Right Side */}
      <div className="text-center text-sm text-gray-300 sm:text-right sm:text-base">
        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        
      </div>

    </div>
  </div>
</footer>
    );
};

export default Footer;