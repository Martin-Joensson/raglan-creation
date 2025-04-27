import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/RaglanVector.svg";

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
    <nav className="bg-gray-300 w-screen sticky  top-0 z-50">
      <div className="flex items-baseline wide:w-2/3 wide:m-auto justify-between">
        <NavLink to="/" className="flex ">
          <img src={logo} className="h-8 m-4" />
          <h1 className="font-poppins m-3 w-full desktop:text-center">
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
        <div className="hidden tablet:flex w-1/2 justify-evenly">
          <div className=" hidden tablet:flex w-full my-4 justify-evenly font-headerFont items-center px-4 py-2 gap-4">
            <a href="https://portfolio.raglancreation.com/">
              <p>Portfolio</p>
            </a>
            {/* <NavLink to="/projects">
              <p>Projects</p>
            </NavLink> */}
          </div>
        </div>
      </div>

      <div
        id="mobilemenu"
        ref={mobileMenuRef}
        className="flex bg-slate-50 flex-col items-center tablet:flex-row justify-evenly font-headerFont hidden tablet:hidden"
      >
        <a href="https://portfolio.raglancreation.com/">
          <p>Portfolio</p>
        </a>
        {/* <NavLink to="/projects">
          <p>Projects</p>
        </NavLink> */}
      </div>
    </nav>
  );
};
