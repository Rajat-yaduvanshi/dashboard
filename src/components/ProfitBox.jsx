import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProfitBox = (props) => {
  function Example(props) {
    return (
      <div className="svgContainer">
        <div
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <div style={{ height: "80%", width: "100%" }}>{props.children}</div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: "9px" }}>{props?.graphAssum}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profit-box">
      <div className="box-left">
        <div className="box-heading" style={{fontWeight: "bold"}}>{props.heading}</div>
        <div className="box-value" style={{ fontSize: "35px", paddingRight: "15px" ,paddingTop: "25px"  ,fontWeight: "bold"}}>
          {props.value}
        </div>
        <div className="box-notation" style={{ display: "flex" }}>
          <div style={{ fontSize: "25px", paddingTop: "15px" ,color: props.numColor}}>
            {props.arrow}
          </div>
          <div style={{ fontSize: "15px", paddingTop: "20px" , color: props.numColor}}>
            {props.incDecValue}
          </div>
        </div>
      </div>
      <div className="box-right">
        <Example graphAssum={props.graphAssum}>
          <CircularProgressbar
            value={70}
            text={`${70}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "rgb(104, 112, 250)",
              trailColor: "#151E3D",
            })}
          />
        </Example>
      </div>
    </div>
  );
};

export default ProfitBox;
