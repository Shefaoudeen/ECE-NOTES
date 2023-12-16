import React from "react";
import SemesterCard from "../Components/SemesterCard";

const Cat = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid gap-10 grid-cols-2">
        <SemesterCard sem="1" />
        <SemesterCard sem="2" />
        <SemesterCard sem="3" />
        <SemesterCard sem="4" />
        <SemesterCard sem="5" />
        <SemesterCard sem="6" />
        <SemesterCard sem="7" />
        <SemesterCard sem="8" />
      </div>
    </div>
  );
};

export default Cat;
