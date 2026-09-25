import React from 'react';
import heroLogo from '@/assets/banner.png'
import Image from 'next/image';
const Banner = () => {
    
  return (
    <section className="rounded-xl border border-gray-800 bg-[#111318] container mx-auto my-40">
      <div className="  sm:px-6 sm:py-12 lg:px-12 lg:py-16">
        
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:gap-6">

          {/* Left Content */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            
            <p className="mb-4 text-xs font-bold tracking-widest text-[#ccff00] sm:text-sm">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-3xl font-extrabold uppercase leading-[0.95] text-white sm:text-4xl md:text-5xl lg:text-6xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-gray-400 sm:text-base md:mx-0">
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today&apos;s plan, and watch the week&apos;s work
              add up.
            </p>

            <button className="mt-6 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-lime-300 sm:px-6 sm:text-sm">
              BROWSE WORKOUTS
            </button>

          </div>

          {/* Right Image */}
           <div className="flex w-full justify-center md:w-1/2">
            <Image
              src={heroLogo}
              alt="Workout "
              className="w-52 object-contain sm:w-64 md:w-72 lg:w-80 xl:w-96"
            />
          </div> 

        </div>
      </div>
    </section>
  );
};



export default Banner;