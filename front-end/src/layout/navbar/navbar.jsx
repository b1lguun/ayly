import "./navbar.scss";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Navbar({ offset, children }) {
  const navigate = useNavigate();
  const location = useLocation()
  const BlackHeaderOnRoutes = ["/:province"]

  const shouldBlackRouter = BlackHeaderOnRoutes.includes(location.pathname)

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
    <>
      <div className="navigation">
        <div className="container">
          <div
            className="navbar"
            style={shouldBlackRouter ? {
              color: offset > 100 ? "#ffffff" : "#125234",
              backgroundColor: offset > 100 ? "#125234" : "",
              transitionDuration: "1s",
            }: {
              color:  "#ffffff",
              backgroundColor:  "#125234"
            }}
          >
            <h1 className="logo" onClick={() => navigate("/")}>
              AYLY
            </h1>
            <div
              className="nav-left"
              style={shouldBlackRouter ? {
                color: offset > 100 ? "#ffffff" : "#125234",
                transitionDuration: "1s",
              } : {
                color: "white",
                transitionDuration: "1s",
              }}
            >
            <p>Your travel web guide</p>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

export default Navbar;

