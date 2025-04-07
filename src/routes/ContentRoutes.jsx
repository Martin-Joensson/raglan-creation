import { Routes, Route } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Body } from "../components/Body";
import { Resume } from "../components/Resume";
import { Projects } from "../components/Projects";
import { Catastrophic } from "../components/CatastrophicFailure/Catastrophic";


export const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/catastrophic" element={<Catastrophic />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
