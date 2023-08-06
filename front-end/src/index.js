import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Myth from "./myth/myth";
import Information from "./information/information";
import Resort from "./resort/resort";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/informations" element={<Information />} />
        <Route path="/" element={<App />} />
        <Route path="/myths" element={<Myth />} />
        <Route path="/resorts" element={<Resort />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
