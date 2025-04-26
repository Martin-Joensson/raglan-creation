import React from "react";

export const Hero = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const sideImg =
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="relative bg-center bg-cover w-full flex justify-between"
    >
      <div className="flex flex-col gap-2 z-20 border tablet:w-1/2 backdrop-opacity-40 rounded-lg m-10 p-10">
        <h2 className="">Get your website up and running.</h2>
        <p>
          We design, build, and launch sites
          that look sharp and perform even sharper. Let’s make something awesome
          together.
        </p>
        <a href="mailto:martin.t.joensson@gmail.com" className="buttonlink">
          {" "}
          <button className="w-fit buttonLink">
            {" "}
            <p className="text-light-links">Contact</p>
          </button>
        </a>
      </div>

      <img
        src={sideImg}
        className="hidden tablet:block w-2/5 object-cover z-0"
      />
    </div>
  );
};
