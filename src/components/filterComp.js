import React, { useState, useEffect, useContext } from "react";
import maincontext from "../context/mainContext";
export default function FilterComp() {
  //creating datavariables

  const [properties, setProperties] = useState({
    propertyLocation: [],
    moveInDate: [],
    price: [],
    propertyType: [],
  });
  const propertyDataState = useContext(maincontext);

  useEffect(() => {}, [properties]);
  // function to filter properties
  function changeField(event) {
    const checkedVal = event.target.checked;
    const valueIs = event.target.value;
    const nameIs = event.target.name;

    if (checkedVal) {
      //add property to respective array
      let tempObj = { ...properties };
      let tempArr = tempObj[nameIs];
      tempArr.push(valueIs);
      tempObj[nameIs] = tempArr;
      setProperties(tempObj);
    } else {
      let tempObj = { ...properties };
      let tempArr = tempObj[nameIs];

      tempArr = tempArr.filter((element) => {
        if (element != valueIs) {
          return element;
        }
      });
      tempObj[nameIs] = tempArr;
      setProperties(tempObj);
    }
  }

  function fun(e) {
    e.preventDefault();

    propertyDataState.filterItems(properties);
  }

  return (
    <div className="cardcomponent container btn-group d-flex flex-wrap justify-content-around">
      <div className="m-3">
        <button type="button" className="btn ">
          Price
        </button>
        <button
          type="button"
          className="btn  dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu bg-light">
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value="<100k"
              id="flexCheckDefault2"
              name="price"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault2">
              {"<100k"}
            </label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value="<500k"
              name="price"
              id="flexCheckDefault1"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault1">
              {"<500k"}
            </label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value=">500k"
              name="price"
              id="flexCheckDefault"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {">500k"}
            </label>
          </li>
        </ul>
      </div>

      {/* //for location */}

      <div className="m-3">
        <button type="button" className="btn ">
          Location
        </button>
        <button
          type="button"
          className="btn  dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu bg-light">
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value="Faridabad"
              id="flexCheckDefault2"
              name="propertyLocation"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault2">
              {"Faridabad"}
            </label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value="Mumbai"
              id="flexCheckDefault1"
              name="propertyLocation"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault1">
              {"Mumbai"}
            </label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value="Delhi"
              id="flexCheckDefault"
              name="propertyLocation"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {"Delhi"}
            </label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value="Chennai"
              id="flexCheckDefault0004"
              name="propertyLocation"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault0004">
              {"Chennai"}
            </label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value="Srinagar"
              id="flexCheckDefault0005"
              name="propertyLocation"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault0005">
              {"Srinagar"}
            </label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value="Imphal"
              id="flexCheckDefault0006"
              name="propertyLocation"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault0006">
              {"Imphal"}
            </label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value="Bhopal"
              id="flexCheckDefault0007"
              name="propertyLocation"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault0007">
              {"Bhopal"}
            </label>
          </li>

          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value="Shilong"
              id="flexCheckDefault0008"
              name="propertyLocation"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault0008">
              {"Shilong"}
            </label>
          </li>
        </ul>
      </div>

      {/* this is for property type */}

      <div className="m-3">
        <button type="button" className="btn ">
          Property Type
        </button>
        <button
          type="button"
          className="btn  dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu bg-light">
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value="Home"
              name="propertyType"
              id="flexCheckDefault01"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault01">
              {"Home"}
            </label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value="Farm House"
              name="propertyType"
              id="flexCheckDefault02"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault02">
              {"Farm House"}
            </label>
          </li>
        </ul>
      </div>

      {/* move in time */}

      <div className="m-3">
        <button type="button" className="btn ">
          Move in Time
        </button>
        <button
          type="button"
          className="btn  dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu bg-light">
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              name="moveInDate"
              value="Within 3 Months"
              id="flexCheckDefault001"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault0001">
              {"Within 3 Months"}
            </label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              value="Within 6 Months"
              name="moveInDate"
              id="flexCheckDefault002"
              onChange={(event) => {
                changeField(event);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault002">
              {"Within 6 Months"}
            </label>
          </li>
        </ul>
      </div>

      <div className="m-3">
        <button
          className="btn btn-outline-dark"
          type="click"
          onClick={(e) => {
            fun(e);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
