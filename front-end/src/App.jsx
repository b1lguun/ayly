import "./App.scss";
import Home from "./pages/home";
import { React, useState, useEffect } from "react";
import { Collection } from "./component";
import { Footer } from "./layout/Footer/Footer";

function App() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const collectionsData = [
    {
      ImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/09/Tavan_Bogd_Mountain.jpg",
      province: "Altai Tavan Bogd",
    },
    {
      ImageUrl:
        "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTLjC8q-R-B9sCx0cC_B5Q65J3AK2IZewsAQMYIU21tqUWT0M3TufErRdtmGEFWHDnV",
      province: "Khuvsgul Lake",
    },
    {
      ImageUrl:
        "https://news.mn/wp-content/archive1/english/photo/2011/9/1edc9547748a3bff/b3e5d62cf5b701e4big.jpg",
      province: "Karakorum",
    },
    {
      ImageUrl:
        "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTcPlPRewqzERu-fDXGZdv6Y5bsRw3Olg-TCoeKIWkuZk9hly3JkRnkTfgNh1Q1AoH4",
      province: "Gobi Desert",
    },
    {
      ImageUrl:
        "https://www.escapetomongolia.com/__data/assets/image/0021/6546/Bayanzag-Flaming-Cliffs-anton-petrus.livejournal.com.jpg",
      province: "Bayan Zag",
    },
    {
      ImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/Amarbayasgalant_monastery_temple_01.JPG",
      province: "Amarbayasgalant Monastry",
    },
    {
      ImageUrl:
        "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQXcIuige2J2EcHBVYQsoNYGvTnYF3-kqfmPQwZItgCcwQxibgC4ZnhGd4YTjDGXNU-",
      province: "Altai Mountains",
    },
    {
      ImageUrl:
        "https://www.mongolia-trips.com/cdn/mn-public/khyargas_lake.jpg",
      province: "Khyargas Lake",
    },
    {
      ImageUrl:
        "https://www.sidecarphoto.co/wp-content/uploads/2019/09/erdene-zuu-monastery.jpg",
      province: "Erdene Zuu Monastery",
    },
    {
      ImageUrl:
        "https://media.kasperskycontenthub.com/wp-content/uploads/sites/67/2019/09/13154000/pustynya-gobi-ushhele-elyn-am-1.jpg",
      province: "Yolyn Am",
    },
    {
      ImageUrl:
        "https://tour2mongolia.com/public/storage/destinations/February2021/uIQQCU3MdRI14R7HWoqX-large.jpg",
      province: "Menen Steppe",
    },
    {
      ImageUrl:
        "https://e8s3v3w7.rocketcdn.me/wp-content/uploads/2017/11/mongolei-der-uvs-nuur-nationalpark-beherbergt-den-grocc88ssten-see-der-mongolei-der-aufgrund-seines-salzgehaltes-fucc88r-viele-seevocc88gel-einen-wichtigen-lebensraum-darstellt-medvedevv-696x464.jpg",
      province: "Uvs Lake",
    },
  ];

  return (
    <div className="app">
      <div className="page1">
        <Home offset={offset} />
      </div>
      <div className="collection-container">
        <div className="collections-wrapper">
          <h1>Best Places to Visit in Mongolia</h1>
        </div>
        <Collection collectionsData={collectionsData} />
      </div>
    </div>
  );
}

export default App;
