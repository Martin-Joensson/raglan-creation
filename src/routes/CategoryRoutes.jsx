import { Routes, Route, useParams } from "react-router-dom";

import { PhotoNotFound } from "../components/Photography/PhotoNotFound";
import { Photo } from "../components/Photography/Photo";
import { Gallery } from "../components/Photography/Gallery";

export const CategoryRoutes = () => {
  return (
    <Routes>
      <Route path="/photography" element={<Photo />} />
      <Route path="/photography/:category" element={<Gallery />} />
      <Route path="/photography/*" element={<PhotoNotFound />} />
    </Routes>
  );
};
