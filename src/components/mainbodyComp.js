import React from "react";
import MainbodyComp1 from "./mainbodyComp1";
import { useContext } from "react";
import PropertyState from "../context/mainContext";
export default function MainbodyComp() {
  const propertiesData = useContext(PropertyState);

  return (
    <div className="container d-flex flex-wrap justify-content-around">
      {propertiesData.propertyDetails.map((detail) => {
        return <MainbodyComp1 key={detail.id} data={detail} />;
      })}
    </div>
  );
}
