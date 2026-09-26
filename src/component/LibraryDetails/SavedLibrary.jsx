
"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const SavedLibrary = ({library}) => {
   const { savedLibrary, setSavedLibrary} = useContext(LibraryContext);

  const handleSavedLibrary = () => {
    console.log("read book btn triggered", library);

    // setReadBooks((prevReadBooks) => [...prevReadBooks, book]);
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