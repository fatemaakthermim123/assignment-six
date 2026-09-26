
"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const SavedLibrary = ({library}) => {
   const { savedLibrary, setSavedLibrary,selectedExercisesTwo, setSelectedExercisesTwo} = useContext(LibraryContext);

  const handleSavedLibrary = () => {

    setSelectedExercisesTwo([...selectedExercisesTwo,library])
    setSavedLibrary([...savedLibrary, library]);
    toast.success(` "${library.name} is added to Saved"`);
  };
  return (
    <button className="border border-slate-500 text-white font-semibold px-5 py-2 rounded-full " 
    onClick={()=>handleSavedLibrary(library)}>
              Save for later
            </button>
  );
};

export default SavedLibrary;