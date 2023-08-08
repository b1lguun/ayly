import React, { useEffect, useState } from "react";
import App from "./App";
import { Province } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layout/navbar/navbar";
import { Footer } from "./layout/Footer/Footer";
import { Detail } from "./pages/Detail";
export const Router = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
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
      <Navbar offset={offset}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:province" element={<Province />} />
          <Route path="/:province/:detail" element={<Detail />} />
        </Routes>
      </Navbar>
      <Footer />
    </>
  );
};
