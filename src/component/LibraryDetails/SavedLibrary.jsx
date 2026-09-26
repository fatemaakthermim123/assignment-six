
"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const SavedLibrary = ({library}) => {
   const { savedLibrary, setSavedLibrary,selectedExercisesTwo, setSelectedExercisesTwo} = useContext(LibraryContext);
     const [added,setAdded]=useState(false);
    
  const handleSavedLibrary = () => {

    setSelectedExercisesTwo([...selectedExercisesTwo,library])
    setSavedLibrary([...savedLibrary, library]);
    toast.success(` "${library.name} is added to Saved"`);
    setAdded(true)
  };
  return (
    <button className="border border-slate-500 text-white font-semibold px-5 py-2 rounded-full " 
    onClick={()=>handleSavedLibrary(library)}
    disabled={added}>{
        added?'added to saved':'Save for later'
    }
              
            </button>
  );
};

export default SavedLibrary;