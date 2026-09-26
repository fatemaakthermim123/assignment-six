"use client";

import Link from "next/link";
import { useState } from "react";

const NavLinks = () => {
  const [active, setActive] = useState("workout");

  const handleActive = (link) => {
    setActive(link);
  };

  return (
    <div className="flex gap-6 items-center">
      <Link
        href="/"
        onClick={() => handleActive("workout")}
        className={
          active === "workout" ? "text-[#ccff00] border border-[#C2F800] rounded-full py-2.5 px-5":
          "text-[#9CA3AF]"
        }
      >
        Workout
      </Link>

      <Link
        href="/MyPlan"
        onClick={() => handleActive("my-plan")}
        className={
          active === "my-plan" ? "text-[#ccff00] border border-[#C2F800] rounded-full  py-2.5 px-5": 
          "text-[#9CA3AF]"
           
        }
      >
        My Plan
      </Link>
    </div>
  );
};

export default NavLinks;