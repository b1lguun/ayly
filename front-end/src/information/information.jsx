import "./information.scss";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
function Information() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="information">
      <Navbar offset={offset} />
      <h1>information</h1>
    </div>
  );
}

export default Information;
