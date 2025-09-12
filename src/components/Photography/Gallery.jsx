import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CapitalizeFirstLetter } from "./CapitalizeFirstLetter";
import { PhotoCard } from "./PhotoCard";
import images from "../../assets/photos.json";
import { PhotoNotFound } from "./PhotoNotFound";

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

export const Gallery = () => {
  let { category } = useParams();
  let galleryTitle = CapitalizeFirstLetter(category);
  let validCategoryList = ["wildlife", "landscape", "street", "portrait"];
  const [validCategory, setValidCategory] = useState(false);

  const validCategoryCheck = () => {
    if (validCategoryList.includes(category)) {
      setValidCategory(true);
      console.log("Valid category?:", validCategory);
    } else {
      setValidCategory(false);
      console.log("Valid category?:", validCategory);
    }
  };

  const checkCategory = (image, index) => {
    if (image.category.includes(category)) {
      return <PhotoCard image={image} key={index} />;
    }
  };

  useEffect(() => {
    validCategoryCheck();
  }, [category]);

  return (
    <div>
      <PhotoHeader />
      <div>
        {validCategory ? (
          <div className="m-auto">
            <div className=" font-headerFont">
              <h3 className="px-14 photoLink mt-2 text-3xl">
                {galleryTitle} Gallery
              </h3>
            </div>
            <div className="px-10 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
              {images.map((image, index) => checkCategory(image, index))}
            </div>
          </div>
        ) : (
          <>
            <PhotoNotFound />
          </>
        )}
      </div>
    </div>
  );
};
