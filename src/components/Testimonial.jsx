import React from "react";

export const Testimonial = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-purple-300 w-screen p-10 "
    >
      <div className="flex flex-col gap-2 z-20 tablet:w-1/2 border rounded-lg p-10 justify-center">
        <h2>What are others saying about us</h2>
        <p>We'll get you noticed on the web</p>
      </div>
    </div>
  );
};
