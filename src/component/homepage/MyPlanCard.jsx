
// "use client";

// import Image from "next/image";
// import { useContext } from "react";
// import { LibraryContext } from "@/context/LibraryContext";

// const MyPlanCard = ({ library }) => {
//   const { removeFromPlan } = useContext(LibraryContext);

//   return (
//     <div className="relative bg-slate-800 rounded-2xl p-4 flex gap-4 items-center">
//       <div >
//       <button
//         onClick={() => removeFromPlan(library.id)}
//         className="absolute top-3 right-3 text-slate-400 hover:text-white"
//       >
//         ✕
//       </button>
      
//           <button className="border border-slate-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
//             View Details
//           </button>
//           <button className="bg-[#c4ff4d] text-black text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-1">
//             ✓ Mark as Done
//           </button>
    
//       </div>

//       {/* Image */}
//       <Image
//         src={library.image}
//         alt={library.name}
//         width={100}
//         height={100}
//         className="rounded-xl w-24 h-24 object-cover"
//       />

//       {/* Info */}
//       <div className="flex-1">
//         <h2 className="text-lg font-extrabold uppercase">{library.name}</h2>
//         <p className="text-sm text-slate-400 mb-2">{library.equipment}</p>
//         <div className="flex items-center gap-4 text-sm text-slate-300">
//           <span>⏱ {library.duration} min</span>
//           <span>🔥 {library.caloriesBurned} kcal</span>
//           <span>⭐ {library.rating}</span>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default MyPlanCard;




"use client";

import Image from "next/image";
import { useContext } from "react";
import { LibraryContext } from "@/context/LibraryContext";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFire, FaRegStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";
import Link from "next/link";

const MyPlanCard = ({ library }) => {
  const { removeFromPlan } = useContext(LibraryContext);
 
  return (
    <div className="relative bg-slate-800 rounded-2xl p-4 flex items-center justify-between gap-4">
      {/* Left Side - Image + Info */}
      <div className="flex items-center gap-4">
        <Image
          src={library.image}
          alt={library.name}
          width={100}
          height={100}
          className="rounded-xl w-24 h-24 object-cover"
        />

        <div>
          <h2 className="text-lg font-extrabold uppercase">{library.name}</h2>
          <p className="text-sm text-slate-400 mb-2">{library.equipment}</p>
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <span className="flex gap-1.5"><MdOutlineWatchLater/> {library.duration} min</span>
          
            <span  className="flex gap-1.5" ><FaFire /> {library.caloriesBurned} kcal</span>
            <span  className="flex gap-1.5"><FaRegStar /> {library.rating}</span>
          </div>
        </div>
      </div>

      {/* Right Side - Buttons */}
      <div className="flex items-center gap-3">
        <Link href={`/Libraries/${library.id}`}><button className="border border-slate-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
          View Details
        </button></Link>
        <button className="bg-[#c4ff4d] text-black text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-1">
          <GiCheckMark /> Mark as Done
        </button>
        <button
          onClick={() => removeFromPlan(library.id)}
          className="text-slate-400 hover:text-white text-lg"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default MyPlanCard;