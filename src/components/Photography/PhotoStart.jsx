import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImagePortrait,
  faMountainSun,
  faTreeCity,
  faCrow,
} from "@fortawesome/free-solid-svg-icons";
import { PhotoHeader } from "./PhotoHeader";

const street = <FontAwesomeIcon icon={faTreeCity} />;
const wild = <FontAwesomeIcon icon={faCrow} />;
const hill = <FontAwesomeIcon icon={faMountainSun} />;
const portrait = <FontAwesomeIcon icon={faImagePortrait} />;

export const PhotoStart = () => {
  let image =
    "https://res.cloudinary.com/dtnqf90qw/image/upload/v1757579027/s_03_cryd6b.jpg";

  return (
    <div className="">
      <div>
        <PhotoHeader />
      </div>
      <div>
        <img
          className="rounded-lg max-h-screen"
          src={image}
          alt="Relaxing in the park"
        />
      </div>
    </div>
  );
};
