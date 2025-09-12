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
    <div className="w-2/3 m-auto">
      <NavLink to="/photography">
        <h1 className="photoLink font-headerFont my-8 text-2xl text-center">
          Martin Jönsson Photography
        </h1>
      </NavLink>
      <div className="photoLink w-full flex flex-row my-8 justify-evenly font-headerFont">
        <NavLink to="/photography/wildlife">
          <h2 className="photoLink hidden tablet:flex">WildLife</h2>
          <p className="photoLink tablet:hidden">{wild}</p>
        </NavLink>
        <NavLink to="/photography/landscape">
          <h2 className="photoLink hidden tablet:flex">Landscape</h2>
          <p className="photoLink tablet:hidden">{hill}</p>
        </NavLink>
        <NavLink to="/photography/street">
          <h2 className="photoLink hidden tablet:flex">Street</h2>
          <p className="photoLink tablet:hidden">{street}</p>
        </NavLink>
        <NavLink to="/photography/portrait">
          <h2 className="photoLink hidden tablet:flex">Portrait</h2>
          <p className="photoLink tablet:hidden">{portrait}</p>
        </NavLink>
      </div>
    </div>
  );
};
