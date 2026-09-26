"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const PlanLibrary = ({ library })=> {
  const { planLibrary,setPlanLibrary} = useContext(LibraryContext);
  

  const handlePlanLibrary = () => {
    console.log("read book btn triggered", library);

    // setReadBooks((prevReadBooks) => [...prevReadBooks, book]);
    setPlanLibrary([...planLibrary, library]);
    toast.success(` "${library.name} is added to plan"`);
  };
  return (
    <button className="bg-[#ccff00] text-black  btn-accent font-semibold px-5 py-2 rounded-full"
    onClick={()=>handlePlanLibrary(library)}>
              Add to today&apos;s plan
            </button>
  );
};

export default PlanLibrary;