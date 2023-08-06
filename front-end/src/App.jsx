import "./App.scss";
import Footer from "./navbar/footer";
import Home from "./pages/home";
import { React, useState, useEffect } from "react";
import Collection from "./pages/component/card";

function App() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="app">
      <div className="page1">
        <Home offset={offset} />
      </div>
      <div className="page2">
        <Collection/>
      </div>
    </div>
  );
}

export default App;
