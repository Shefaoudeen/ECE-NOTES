import React from "react";

const SemesterCard = (props) => {
  return (
    <div>
      <div className="border-2 px-10 py-4 rounded-lg bg-slate-200 hover:bg-slate-300">
        <h1>
          SEM <span>{props.sem}</span>
        </h1>
      </div>
    </div>
  );
};

export default SemesterCard;
