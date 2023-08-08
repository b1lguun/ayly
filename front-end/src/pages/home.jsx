import "./home.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { provinceData } from "../utils/data";
export function Home({ offset }) {
  const [val, setVal] = useState("");

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-container-left">
          <h1>Таны аяллын хөтөч</h1>
          <p>
            Монгол улсын 21 аймгийн аялал жуулчлалын цогцолбор газаруудын
            мэдээллийг нэг доороос авах боломжтой вебсайт.
          </p>
          <a href="https://www.instagram.com/ayly.mn_/" className="home-button">
            Learn more
          </a>
        </div>
        <div className="home-container-right">
          <div className="where">
            <h1>Хаашаа аялах вэ?</h1>
          </div>

          <div className="right-from">
            <p>Хаашаа:</p>
            <input
              list="data"
              onChange={(e) => setVal(e.target.value)}
              placeholder="Аялахаар төлөвлөж буй аймагаа сонгоно уу."
            />
            <datalist id="data">
              {Object.keys(provinceData).map((op) => (
                <option onClick={() => setVal(op)}>{op}</option>
              ))}
            </datalist>
          </div>
          <Link className="gen-button" to={val && val}>
            <div className="gen-but">
              <button className="generate">Generate</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
