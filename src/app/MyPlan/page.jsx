"use client"
import MyPlanCard from '@/component/homepage/MyPlanCard';
import MySavedCard from '@/component/homepage/MySavedCard';
import PlanExcercise from '@/component/homepage/PlanExcercise';
import SavedExcercise from '@/component/homepage/SavedExcercise';
import LibraryCard from '@/component/shared/LibraryCard';
import { LibraryContext } from '@/context/LibraryContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {
const{planLibrary,savedLibrary}=useContext(LibraryContext);
const {visible,setVisible}=useContext(LibraryContext);
const [activeTab, setActiveTab]=useState("plan");


    return (
        <div className='container mx-auto my-20'>
        <div className='gird grid-cols-1'>
            <h1 className='text-5xl font-extrabold mb-4'>MY PLAN</h1>
            <p className='text-xl font-semibold text-gray-600'>
                Cap of five lifts for today. Finish them, then load more.</p>


           {activeTab === 'plan' ? <PlanExcercise /> : <SavedExcercise />}
            
            
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_2" className="tab" aria-label='Today&apos;s Plan'
  checked={activeTab === 'plan'}
onChange={() => setActiveTab('plan')}/>
  <div className="tab-content border-base-300 bg-base-300 p-10">
    {
        planLibrary.length>0?(
            planLibrary.map(library=> <MyPlanCard key={library.id}
                        library={library} visible={visible} setVisible={setVisible}></MyPlanCard>)
        ):(<div className='grid grid-cols-1 sapce-y-3 justify-center text-center items-center'>
            <h1 className='text-3xl font-extrabold'>NOTHING HERE YET</h1>
            <p className='text-xl text-gray-500'>Browse the library and add a lift to get today moving</p>
        <Link href='/'>
        <button className='mt-6 rounded-full bg-[#ccff00] px-5 py-3 text-xs font-bold text-black 
        transition hover:bg-lime-300 sm:px-6 sm:text-sm'>Go to Workouts</button>
        </Link>
        </div>)
    }
    </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Saved" 
 checked={activeTab === 'saved'}
onChange={() => setActiveTab('saved')}/>
  <div className="tab-content border-base-300 bg-base-300 p-10">

     {
        savedLibrary.length>0?(
            savedLibrary.map(library=> <MySavedCard key={library.id}
                        library={library}></MySavedCard>)
        ):(<div className='grid grid-cols-1 sapce-y-3 justify-center text-center items-center'>
            <h1 className='text-3xl font-extrabold'>NOTHING HERE YET</h1>
            <p className='text-xl text-gray-500'>Browse the library and add a lift to get today moving</p>
        <Link href='/'>
        <button className='mt-6 rounded-full bg-[#ccff00] px-5 py-3 text-xs font-bold text-black 
        transition hover:bg-lime-300 sm:px-6 sm:text-sm'>Go to Workouts</button>
        </Link>
            </div>)
    }
  </div>

 
</div>













        </div>
        </div>
    );
};

export default MyPlanPage;