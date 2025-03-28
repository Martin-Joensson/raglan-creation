import React from "react";

export const Hero = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const sideImg =
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="relative bg-center w-screen flex justify-between"
    >
      <div className="flex flex-col gap-2 z-20 border tablet:w-1/2 backdrop-opacity-40 rounded-lg m-10 p-10">
        <h2>Get your website up and running.</h2>
        <p>We'll get you noticed on the web</p>
        <button className="w-fit"> Contact</button>
      </div>

        <img
          src={sideImg}
          className="hidden tablet:block w-2/5 object-cover z-0"
        />
  
    </div>
  );
};
