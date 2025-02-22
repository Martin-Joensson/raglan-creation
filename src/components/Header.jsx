import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="bg-gray-200 text-white w-screen z-50">
      <NavLink to="/">
        <h1 className="font-poppins p-4 text-center">Raglan Creation</h1>
      </NavLink>
      <div className="flex flex-col items-center tablet:flex-row my-4 justify-evenly font-headerFont">
        <NavLink to="/resume">
          <p>Resume</p>
        </NavLink>
        {/* <NavLink to="/bilder">
          <p>Bilder</p>
        </NavLink> */}
        <NavLink to="/photography">
          <p>Photography</p>
        </NavLink>
      </div>
    </nav>
  );
};
