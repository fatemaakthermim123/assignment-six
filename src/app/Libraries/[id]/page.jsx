

import PlanLibrary from '@/component/LibraryDetails/PlanLibrary';
import SavedLibrary from '@/component/LibraryDetails/SavedLibrary';
import Image from 'next/image';
import React from 'react';

const getlibrariesData = async () => {
  try {
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

const librariesDataDetails = async ({ params }) => {
  const { id } = await params;
  const librariesData = await getlibrariesData();
  const library = librariesData.find(
    (item) => String(item.id) === String(id)
  );

  if (!library) {
    return <div className="container mx-auto my-10 px-4">Library not found.</div>;
  }

  return (
    <section className="container mx-auto  my-48 px-4">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={library.image}
            alt={library.name}
            width={600}
            height={600}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Content */}
        <div>
        

          {/* Title */}
          <h1 className="text-4xl font-extrabold mb-3">
            {library.name.toUpperCase()}
          </h1>

          {/* Description */}
          <p className="text-slate-300 mb-6">{library.description}</p>
           
             {/* Muscle Group Tags */}
          <div className="flex gap-2 mb-4">
            {library.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#ccff00] px-4 py-1 text-xs font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>
          {/* Stats */}
          <div className="space-y-3 mb-6 text-sm">
            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span className="text-slate-400">EQUIPMENT</span>
              <span className="font-semibold">{library.equipment}</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span className="text-slate-400">DIFFICULTY</span>
              <span className="font-semibold">{library.difficulty}</span>
            </div>
             <div className="flex justify-between border-b border-slate-700 pb-2">
              <span className="text-slate-400">SETS</span>
              <span className="font-semibold">{library.sets}</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span className="text-slate-400">REPS</span>
              <span className="font-semibold">{library.reps}</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span className="text-slate-400">DURATION</span>
              <span className="font-semibold">{library.duration} min</span>
            </div>
           
            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span className="text-slate-400">CALORIES</span>
              <span className="font-semibold">{library.caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="text-slate-400">RATING</span>
              <span className="font-semibold">{library.rating}</span>
            </div>
          </div>

          {/* Instructions */}
          <h2 className="text-lg font-bold mb-3">INSTRUCTIONS</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
            {library.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          {/* Buttons */}
          <div className="flex gap-3">
            <PlanLibrary library={library} ></PlanLibrary>
           <SavedLibrary library={library}></SavedLibrary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default librariesDataDetails;