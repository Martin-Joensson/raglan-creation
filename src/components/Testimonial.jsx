import React from "react";

export const Testimonial = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="relative bg-purple-300 w-screen h-1/2 p-20">
      <img
        src={bgImg}
        alt="Abstract red and purple swirl"
        className="absolute top-0 object-cover opacity-45 z-10 left-0 w-full h-full"
      />
      <div className="absolute flex flex-col gap-2 z-20 border rounded-lg p-10 justify-center">
        <h2>What are others saying about us</h2>
        <p>We'll get you noticed on the web</p>
      </div>
    </div>
  );
};
