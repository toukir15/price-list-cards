import React from "react";
import { BsPatchCheck } from "react-icons/bs";

const Feature = ({ feature }) => {
  return (
    <div className="text-white flex gap-2 ml-2 items-center">
      <BsPatchCheck />
      <p>{feature}</p>
    </div>
  );
};

export default Feature;
