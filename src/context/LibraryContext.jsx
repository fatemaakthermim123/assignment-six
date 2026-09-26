"use client"

import { createContext, useState } from "react";

  export const LibraryContext=createContext({});
const LibraryProvider = ({children}) => {
    const [planLibrary,setPlanLibrary]=useState([]);
    const [savedLibrary,setSavedLibrary]=useState([]);
    const removeFromPlan = (id) => {
    setPlanLibrary((library) => library.filter((item) => item.id !== id));
};

    const removeFromSaved = (id) => {
    setSavedLibrary((library) => library.filter((item) => item.id !== id))
    ;}
  

    const sharedData={
        planLibrary,
        setPlanLibrary,
        savedLibrary,
        setSavedLibrary,
        removeFromPlan,
        removeFromSaved
        
        
    }
    return (
      <LibraryContext.Provider value={sharedData}>{children}</LibraryContext.Provider>
    );
};

export default LibraryProvider;
