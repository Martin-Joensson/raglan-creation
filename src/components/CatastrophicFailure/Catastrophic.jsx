import React from "react";
import { Rules } from "./Rules";
import catastrophic from "../../assets/catastrophic.png"

export const Catastrophic = () => {
  return (
    <div className="wide:w-2/3 wide:m-auto bg-white text-black flex flex-col ">
      <img src={catastrophic} className="m-auto pb-4" />
      <h2  className="py-4 hidden">Catastrophic Failure</h2>
      <p className="w-1/2 m-auto"> Catastrophic Failure is an upcoming RPG by me and my friends. The basic premise being that you get to do pretty much everything, but the consequences might be dire.</p>
      <p>Check back soon for more!</p>
      {/* <Rules /> */}
    </div>
  );
};
