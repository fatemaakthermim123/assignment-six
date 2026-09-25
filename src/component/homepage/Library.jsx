 import React from 'react';
import LibraryCard from '../shared/LibraryCard';
 
 const getDate = async () => {
  try{

    const response = await fetch(' https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();
    return data;
  }catch(error){
    console.error("Error fetching books data:", error);
    return [];
  }
};



 const Library = async() => {
    const libraries=await getDate()
    return (
        <section className='container mx-auto my-20'>
            <h1 className='text-5xl font-extrabold'>THE LIBRARY</h1>
            <p className='text-gray-400 my-3.5 text-xl'>Twelve lifts covering every major muscle group.</p>
       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {libraries.map((library) => {
          return <LibraryCard key={library.id} library={library} />;
        })}
      </div>
      
      </section>
    );
 };
 
 export default Library;