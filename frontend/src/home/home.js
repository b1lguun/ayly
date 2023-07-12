import "./home.css";
import React, { useEffect } from "react";
import AnimatedPage from "../animatedpage";
import Navbar from "../navbar/navbar";

export function Home({ offset }) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        document.body.style.textEmphasisColor = "#0d2a16";
      } else {
        document.body.style.textEmphasisColor = "#ffffff";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatedPage>
      <div className="home">
        <Navbar offset={offset} />
        <h1>home</h1>
      </div>
    </AnimatedPage>
  );
}

export default Home;
