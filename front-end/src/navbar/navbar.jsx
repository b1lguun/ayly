import "./navbar.scss";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Navbar({ offset }) {
  const navigate = useNavigate();

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
      <div className="navigation">
        <div className="container">
          <div
            className="navbar"
            style={{
              color: offset > 100 ? "#ffffff" : "#125234",
              backgroundColor: offset > 100 ? "#125234" : "",
              transitionDuration: "1s",
            }}
          >
            <h1 className="logo" onClick={() => navigate("/")}>
              AYLY
            </h1>
            <div
              className="nav-left"
              style={{
                color: offset > 100 ? "#ffffff" : "#125234",
                transitionDuration: "1s",
              }}
            >
              <p onClick={() => navigate("/informations")}>Search</p>
              <p onClick={() => navigate("/myths")}>Myths</p>
              <p onClick={() => navigate("/resorts")}>Resorts</p>
              <p onClick={() => navigate("/lan")}>Language switch</p>
              <p onClick={() => navigate("/about-us")}>About Us</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Navbar;

