import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

export const Collection = ({ collectionsData }) => {
  return (
    <div className="cards-wrapper ">
      {collectionsData.map(({ ImageUrl, province }, index) => (
        <CollectionCard key={index} ImageUrl={ImageUrl} province={province} />
      ))}
    </div>
  );
};

const CollectionCard = ({ ImageUrl, province }) => {
  const cardStyle = {
    backgroundImage: `url(${ImageUrl})`,
  };

  return (
    <Link className="collection-card-wrapper" to={province}>
      <div className="card-parent">
        <div className="card-child" style={cardStyle}>
          <p>{province}</p>
        </div>
      </div>
    </Link>
  );
};
