import React from "react";

const PriceCard = ({ price }) => {
  return (
    <div className="text-center bg-orange-400 text-white rounded-lg">
      <h1>
        <span className="text-5xl font-extrabold">{price.price}</span>{" "}
        <span className="text-2xl font-medium">/month</span>
      </h1>
      <h2>{price.name}</h2>
    </div>
  );
};

export default PriceCard;
