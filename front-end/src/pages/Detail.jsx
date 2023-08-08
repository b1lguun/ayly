import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { provinceData } from "../utils/data";
import { useState } from "react";
import { Collection } from "../component";
import "./Details.scss";

export const Detail = () => {
  const { province,detail } = useParams();
  const [provinceDetail, setDetail] = useState([]);
  useEffect(() => {
    const getDetail = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3333/${provinceData[province]}`
        );
        const number = Object.keys(data).filter((data1) => data[data1].province === detail)
        setDetail(data[number]);
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
          <h1> {provinceDetail.province}</h1>
        </div>
        <img className="container-image" alt="" src={provinceDetail.ImageUrl}/>
        <>
        {provinceDetail.first_information}
        </>
        <>
        {provinceDetail.second_information}
        </>
        <>
        {provinceDetail.third_information}
        </>
        {/* <Collection collectionsData={provinceDetail} /> */}
      </div>
    </>
  );
};

