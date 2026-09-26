"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const PlanLibrary = ({ library })=> {
  const { planLibrary,setPlanLibrary, selectedExercises, setSelectedExercises} = useContext(LibraryContext);
  const [added,setAdded]=useState(false);

  const handlePlanLibrary = () => {
    setSelectedExercises([...selectedExercises,library])
    setPlanLibrary([...planLibrary, library]);
    toast.success(` "${library.name} is added to plan"`);
    setAdded(true)
  };
  return (
    <button className="bg-[#ccff00] text-black  btn-accent font-semibold px-5 py-2 rounded-full"
    onClick={()=>handlePlanLibrary(library)}
    disabled={added}>
            {
    added?'Added to Plan': `Add to today's plan `
            } 
            </button>
  );
};

export default PlanLibrary;