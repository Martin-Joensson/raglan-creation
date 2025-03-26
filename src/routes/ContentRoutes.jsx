import { Routes, Route } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Body } from "../components/Body";


export const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
