import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const mobileMenuRef = useRef(null);

  const hamburgerToggle = () => {
    let x = document.getElementById("burgerLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  };

  const toggleMobileMenu = () => {
    if (mobileMenuRef.current) {
      // Toggle visibility of the mobile menu
      mobileMenuRef.current.classList.toggle("hidden");
    }
  };

  const handleClick = () => {};

  return (
    <nav className="bg-gray-200 text-white w-screen z-50">
      <div className="flex items-center justify-between">
        <NavLink to="/">
          <h1 className="font-poppins p-4 w-fit desktop:text-center">
            Raglan Creation
          </h1>
        </NavLink>

        <div
          className="tablet:hidden cursor-pointer m-4 flex"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#663399"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="hidden w-full tablet:flex">
          <div className=" hidden w-full tablet:flex my-4 justify-evenly font-headerFont items-center px-4 py-2">
            <NavLink to="/resume">
              <p>Resume</p>
            </NavLink>
            <NavLink to="/projects">
              <p>Projects</p>
            </NavLink>
          </div>
        </div>
      </div>

      <div
        id="mobilemenu"
        ref={mobileMenuRef}
        className="flex bg-slate-50 flex-col items-center tablet:flex-row justify-evenly font-headerFont hidden tablet:hidden"
      >
        <NavLink to="/resume">
          <p>Resume</p>
        </NavLink>
        <NavLink to="/projects">
          <p>Projects</p>
        </NavLink>
      </div>
    </nav>
  );
};
