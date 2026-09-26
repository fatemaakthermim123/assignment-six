import { LibraryContext } from '@/context/LibraryContext';
import React, { useContext } from 'react';

const PlanExcercise = () => {
    const {selectedExercises} = useContext(LibraryContext);

const totalExercises = selectedExercises.length;

const totalMinutes = selectedExercises.reduce(
  (total, exercise) => total + Number(exercise.duration) ,
  0
);

const totalCalories = selectedExercises.reduce(
  (total, exercise) => total + Number (exercise.caloriesBurned),
  0);
    return (
            <div className="bg-slate-800 text-white p-4 rounded-xl flex items-center justify-around my-16">
      
    <div className='gird grid-cols-1 space-y-2'>
        <h1>Excercises</h1>
          <p className="text-5xl font-bold">{totalExercises}</p>
    </div>
      <div  className='gird grid-cols-1 space-y-2'>
        <h1>Minutes</h1>
        <p className="text-5xl font-bold">{totalMinutes}</p>
      </div>
      <div className='gird grid-cols-1 space-y-2'>
        <h1>Calories</h1>
        <p className="text-5xl font-bold">{totalCalories}</p>
      </div>
        </div>
    );
};

export default PlanExcercise;