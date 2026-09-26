"use client"
import React, { createContext, useState } from 'react';

 

  export const LibraryContext=createContext({});
const LibraryProvider = ({children}) => {
    const [planLibrary,setPlanLibrary]=useState([]);
    const [savedLibrary,setSavedLibrary]=useState([]);
    const sharedData={
        planLibrary,
        setPlanLibrary,
        savedLibrary,
        setSavedLibrary
    }
    return (
      <LibraryContext.Provider value={sharedData}>{children}</LibraryContext.Provider>
    );
};

export default LibraryProvider;


// const BooksProvider = ({ children }: { children: ReactNode }) => {
//   const [readBooks, setReadBooks] = useState<IBook[]>([]);
//   const [wishlist, setWishlist] = useState<IBook[]>([]);

//   const sharedData = {
//     readBooks,
//     setReadBooks,
//     wishlist,
//     setWishlist,
//   };

//   return (
//     <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
//   );
// };

// export default BooksProvider;