import "./resort.scss";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
function Resort() {
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
      <h1>Resorts</h1>
    </div>
  );
}

export default Resort;
