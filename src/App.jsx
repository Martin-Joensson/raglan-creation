import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ContentRoutes } from "./routes/ContentRoutes";
import logo from "./assets/RaglanVector.svg";

export const App = () => {
  const [headerAndFooter, setHeaderAndFooter] = useState(false);
  const slug = useLocation();

  console.log("Slug: ", slug);

  useEffect(() => {
    if (slug.pathname == "/") {
      setHeaderAndFooter(false);
    } else if (slug.pathname.includes("/photography")) {
      setHeaderAndFooter(false);
    } else {
      setHeaderAndFooter(true);
    }
  }, [slug]);

  return (
    <div className="flex relative flex-col min-h-screen w-screen">
      {headerAndFooter ? (
        <>
          <div>
            <Header />
          </div>
          <main className="flex flex-grow flex-1 justify-center">
            <div>
              <ContentRoutes />
            </div>
          </main>
          <div>
            <Footer />
          </div>
        </>
      ) : (
        <>
          <div>
            <NavLink to="/" className="flex items-center">
              <img src={logo} className="h-10 ml-8 my-3" />
              <h1 className="font-poppins my-3 w-full desktop:text-center hidden">
                Raglan Creation
              </h1>
            </NavLink>
          </div>
          <div className="hidden">
            <Header />
          </div>
          <main className="flex flex-grow flex-1 justify-center">
            <ContentRoutes />
          </main>
          <div className="hidden">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};
