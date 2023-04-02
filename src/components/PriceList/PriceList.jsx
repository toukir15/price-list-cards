import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-5xl my-4 font-bold">Awesome Prices</h2>
      <div className="grid grid-cols-3 gap-6">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price} />
        ))}
      </div>
    </div>
  );
};

export default PriceList;
