import React from "react";
import { Work } from "./Resume/Work";
import { Education } from "./Resume/Education";
import { Sidebar } from "./Resume/Sidebar";
import { Bio } from "./Resume/Bio";

export const Resume = () => {
  return (
    <div className="flex w-full justify-between">
      {/* Sidebar */}
      {/* <div className="w-1/4">
        <Sidebar />
      </div> */}

      {/* Main Content */}
      <div className="bg-slate-600 w-full px-10 py-4">
        <Bio />
        <Work />
        <Education />
      </div>
    </div>
  );
};
