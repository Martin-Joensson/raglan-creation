import React from "react";

export const Hero = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="relative bg-purple-300 bg-opacity-30 bg-center bg-[url(https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-screen p-20">
      <div className=" flex flex-col gap-2 z-20 border backdrop-opacity-40 rounded-lg p-10">
        <h2>Get your website up and running.</h2>
        <p>We'll get you noticed on the web</p>
        <button className="w-fit"> Contact</button>
      </div>
      {/* <img
        src={bgImg}
        alt="Abstract red and purple swirl"
        className=" top-0 object-cover z-10 left-0 w-full h-full"
      /> */}
    </div>
  );
};
