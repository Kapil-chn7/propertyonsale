import maincontext from "./mainContext";
import React, { useState, useEffect } from "react";
import propertiesData from "../Data/propertyData";

const PropertyState = (props) => {
  const [propertyDetails, setCartItems] = useState(propertiesData);
  useEffect(() => {}, [propertyDetails]);

  const filterItems = (props) => {
    const dataval = propertiesData;
    if (
      props.moveInDate.length == 0 &&
      props.price.length == 0 &&
      props.propertyType.length == 0 &&
      props.propertyLocation.length == 0
    ) {
      setCartItems(propertiesData);
      return;
    } else {
      const newArr = dataval.filter((data) => {
        const propertyLoc = data.location;
        const rent = data.rent;

        let one =
          props.propertyLocation.length == 0
            ? true
            : props.propertyLocation.includes(propertyLoc);

        let two =
          props.price.length == 0
            ? 1
            : props.price.filter((element) => {
                let tEle = element.substr(1, element.length - 2);
                // console.log(`Rent ${rent} ${element[0]} and tEle ${tEle}`);
                if (element[0] == "<" && tEle >= rent) {
                  return true;
                } else if (element[0] == ">" && tEle < rent) {
                  return true;
                } else {
                  return false;
                }
              });

        let three =
          props.moveInDate.length == 0
            ? true
            : props.moveInDate.includes(data.moveInDate);
        let four =
          props.propertyType.length == 0
            ? true
            : props.propertyType.includes(data.propertyType);

        if (two.length != 0 && one && three && four) {
          return true;
        } else {
          return false;
        }
      });

      setCartItems(newArr);
    }
  };

  return (
    <maincontext.Provider value={{ filterItems, propertyDetails }}>
      {props.children}
    </maincontext.Provider>
  );
};

export default PropertyState;
