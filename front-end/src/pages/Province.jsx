import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { provinceData } from "../utils/data";
import { useState } from "react";
import { Collection } from "../component";

export const Province = () => {
  const { province } = useParams();
  const [provinceDetail, setDetail] = useState([]);
  useEffect(() => {
    const getDetail = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3333/${provinceData[province]}`
        );
        setDetail(data);
      } catch (err) {
        console.log(err);
      }
    };
    getDetail();
  }, []);
  return (
    <>
      <div className="collection-container">
        <div className="collections-wrapper">
          <h1>Best Places to Visit in {provinceData[province]}</h1>
        </div>
        <Collection collectionsData={provinceDetail} />
      </div>
    </>
  );
};

