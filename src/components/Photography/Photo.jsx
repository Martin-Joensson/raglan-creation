import { CategoryRoutes } from "../../routes/CategoryRoutes";
import { PhotoHeader } from "./PhotoHeader";

export const Photo = () => {
  return (
    <div className="min-h-screen relative">
      <PhotoHeader />
      <div className="pb-10">
        <CategoryRoutes />
        {/* 
    Main content section
    */}
      </div>
    </div>
  );
};
