import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ContentRoutes } from "./routes/ContentRoutes";

export const App = () => {
  const [headerAndFooter, setHeaderAndFooter] = useState(false);
  const slug = useLocation();

  console.log("Slug: ", slug);

  useEffect(() => {
    if (slug.pathname == "/") {
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
            <ContentRoutes />
          </main>
          <div>
            <Footer />
          </div>
        </>
      ) : (
        <>
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
