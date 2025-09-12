import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImagePortrait,
  faMountainSun,
  faTreeCity,
  faCrow,
} from "@fortawesome/free-solid-svg-icons";

const street = <FontAwesomeIcon icon={faTreeCity} />;
const wild = <FontAwesomeIcon icon={faCrow} />;
const hill = <FontAwesomeIcon icon={faMountainSun} />;
const portrait = <FontAwesomeIcon icon={faImagePortrait} />;

export const PhotoHeader = () => {
  return (
    <div className=" w-full border-red-500">
      <NavLink to="/">
        <h1 className="font-headerFont my-8 text-2xl">
          Martin Jönsson Photography
        </h1>
      </NavLink>
      <div className="w-full flex flex-row my-8 justify-evenly font-headerFont">
        <NavLink to="/photography/wildlife">
          <h2 className="hidden tablet:flex">WildLife</h2>
          <p className="tablet:hidden">{wild}</p>
        </NavLink>
        <NavLink to="/photography/landscape">
          <h2 className="hidden tablet:flex">Landscape</h2>
          <p className="tablet:hidden">{hill}</p>
        </NavLink>
        <NavLink to="/photography/street">
          <h2 className="hidden tablet:flex">Street</h2>
          <p className="tablet:hidden">{street}</p>
        </NavLink>
        <NavLink to="/photography/portrait">
          <h2 className="hidden tablet:flex">Portrait</h2>
          <p className="tablet:hidden">{portrait}</p>
        </NavLink>
      </div>
      {/* 
    
    Logo, categories, links sleek and stylish.

    */}
    </div>
  );
};
