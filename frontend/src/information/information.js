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
  return <Navbar offset={offset} />;
}

export default Information;
