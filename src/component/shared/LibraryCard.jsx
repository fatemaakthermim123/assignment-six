import Image from 'next/image';
import React from 'react';
import { BiSolidCircleThreeQuarter } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';

const LibraryCard = ({library}) => {
    return (
       
    <div className="rounded-3xl bg-[#111318] transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <Image
        width={100}
        height={100}
        src={library.image}
        alt={library.name}
        className='w-full rounded-t-3xl h-60'
      />

      {/* Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="mb-5 flex flex-wrap gap-2">
          {library.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#ccff00] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold uppercase text-white">
          {library.name}
        </h2>

        {/* Equipment */}
        <p className="mt-2 text-sm text-slate-300">
          {library.equipment}
        </p>

        {/* Bottom Info */}
        <div className="mt-6 flex items-center gap-5 border-t border-slate-500/40 pt-4 text-sm text-slate-200">

          <span className='flex gap-2'><MdOutlineWatchLater/> {library.duration} min</span>

          <span className='flex gap-2'><BiSolidCircleThreeQuarter /> {library.caloriesBurned} kcal</span>

          <span className='flex gap-2'><FaRegStar />{library.rating}</span>

        </div>

      </div>
    </div>
  );
};


export default LibraryCard;