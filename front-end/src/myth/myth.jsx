import "./myth.scss";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
function Myth() {
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
      <h1>Myths</h1>
    </div>
  );
}

export default Myth;
