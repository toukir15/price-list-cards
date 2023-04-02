import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  console.log(price);
  return (
    <div className=" bg-orange-400 text-white rounded-lg">
      <h1 className="text-center">
        <span className="text-5xl  font-extrabold">{price.price}</span>{" "}
        <span className="text-2xl  font-medium">/month</span>
      </h1>
      <h2 className="text-center text-3xl font-bold">{price.name}</h2>
      <div className="ml-2">
        <p className="font-bold underline">Feature:</p>
        {price.features.map((feature) => (
          <Feature feature={feature} />
        ))}
      </div>
      <div className="flex justify-center my-4">
        <button className="bg-purple-600 px-4 py-3 rounded w-[80%]">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
