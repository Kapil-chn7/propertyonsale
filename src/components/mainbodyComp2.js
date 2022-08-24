import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

export default function MainbodyComp2(props) {
  let style2 = {
    backgroundColor: "#A9A9A9",
    color: "#fff",
  };

  let idval = `exampleModalToggle${props.data.id}`;
  let idaccessval = `#exampleModalToggle${props.data.id}`;
  return (
    <div className="bg-light">
      <div
        className="modal fade"
        id={idval}
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                {props.data.propertyType}
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container">
              <span className="d-flex justify-content-start">
                <ImLocation />
                &nbsp; {props.data.location}
              </span>

              {props.data.description}
              <br />
              {props.data.moveInDate}
            </div>
            <div className="modal-footer">
              <h5>only for ${props.data.rent}k</h5>
            </div>
          </div>
        </div>
      </div>

      <a
        className="btn"
        data-bs-toggle="modal"
        href={idaccessval}
        style={style2}
        role="button"
        onClick={() => {}}
      >
        <BsInfoCircleFill />
      </a>
    </div>
  );
}
