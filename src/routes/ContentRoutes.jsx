import { Routes, Route } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Body } from "../components/Body";
import { Resume } from "../components/Resume";
import { Projects } from "../components/Projects";


export const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
