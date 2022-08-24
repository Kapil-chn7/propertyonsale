import React, { useState } from "react";
import MainbodyComp2 from "./mainbodyComp2";
export default function MainbodyComp1({ data }) {
  let style1 = {
    width: "18rem",

    borderRadius: "5px",
    boxShadow: "3px 5px 2px #888888",
    margin: "5px",
  };
  let style2 = {
    height: "250px",
  };
  let style3 = {
    backgroundColor: "#A9A9A9",
    color: "#fff",
  };

  return (
    <div className="card m-3  " style={style1}>
      <img
        src={data.imagepath}
        style={style2}
        className=" img-thumbnail card-img-top"
        alt="..."
      />

      <div className="card-body">
        <h5 className="card-title">{data.location}</h5>

        <h5>${data.rent}k</h5>
        <span className="container d-flex align-items-center p">
          <div>
            <a
              href="#"
              style={style3}
              className="btn m-3"
              onClick={() => {
                alert("Sorry this functionality is not available yet");
              }}
            >
              Rent it Now
            </a>
          </div>
          <MainbodyComp2 data={data} />
        </span>
      </div>
    </div>
  );
}
