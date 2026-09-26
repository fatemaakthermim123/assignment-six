"use client"
import LibraryCard from '@/component/shared/LibraryCard';
import { LibraryContext } from '@/context/LibraryContext';
import React, { useContext } from 'react';

const MyPlanPage = () => {
const{planLibrary,savedLibrary}=useContext(LibraryContext);
console.log(planLibrary)
    return (
        <div className='container mx-auto my-20'>
        <div className='gird grid-cols-1'>
            <h1 className='text-5xl font-extrabold mb-4'>MY PLAN</h1>
            <p className='text-xl font-semibold text-gray-600'>
                Cap of five lifts for today. Finish them, then load more.</p>
                <div className='my-28'>
                    {
                        planLibrary.map(library=> <LibraryCard key={library.id}
                        library={library}></LibraryCard>)
                    }
                </div>
        </div>
        </div>
    );
};

export default MyPlanPage;