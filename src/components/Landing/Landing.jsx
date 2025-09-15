import raglanLogo from "../../assets/RaglanVector.svg";

import { NavLink } from "react-router-dom";

export const Landing = () => {
  const videoBackground =
    "https://res.cloudinary.com/dtnqf90qw/video/upload/w_1080/q_auto:eco/v1757569260/purpleabstract-hd_1920_1080_30fps_ncge7g.mp4";

  return (
    <div className="videoWrapper relative right-0 top-0 min-h-full min-w-screen overflow-hidden">
      <video
        autoPlay
        playsInline
        muted
        loop
        className="fixed right-0 top-0 min-h-full min-w-screen object-cover opacity-50"
      >
        <source src={videoBackground} />
      </video>
      <div className="absolute top-1 flex justify-center w-screen h-full">
        <div className="flex flex-col w-2/3 m-auto">
          <img src={raglanLogo} className="w-4/5 tablet:w-3/5 desktop:w-2/5 wide:w-1/4 m-auto mb-20" />

          <div className="flex flex-col tablet:flex-row gap-6 tablet:w-4/5 desktop:w-3/5 m-auto text-center text-md desktop:text-2xl justify-between">
            <NavLink
              className="blinkAnimate border-2 rounded-2xl p-4 backdrop-blur-xs"
              to="/webdev"
            >
              Frontend
            </NavLink>
{/* 
            <NavLink className="blinkAnimate" to="/photography">
              Games
            </NavLink> */}

            <NavLink className="blinkAnimate" to="/photography">
              Photo
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
