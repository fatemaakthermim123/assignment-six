
"use client"
import { LibraryContext } from '@/context/LibraryContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const NavBadge = () => {
    const{ selectedExercises,selectedExercisesTwo}=useContext(LibraryContext);
    return (
        <div className="navbar-end flex gap-4">
    <Link href='/MyPlan'>
<button className="btn   border rounded-full">Plan<span className='bg-[#ccff00] border rounded-full text-black px-1'>{selectedExercises.length}</span></button>
    <button className="btn border rounded-full">Saved <span className='px-1 border rounded-full bg-gray-600'>{selectedExercisesTwo.length}</span> </button>
    </Link>
  </div>
    );
};

export default NavBadge;