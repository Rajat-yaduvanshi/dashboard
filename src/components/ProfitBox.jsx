import React from "react"
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

const ProfitBox=(props)=>{

    function Example(props) {
        return (
          <div className="svgContainer">
            <div style={{height: "100%" , display: "flex" ,flexDirection:"column"}}>
              <div style={{height: "90%" ,  width: "100%"}}>{props.children}</div>
              <div style={{ width: "100%" }}>
                <p style={{fontSize:"9px"}}>{props?.graphAssum}</p>
              </div>
            </div>
          </div>
        );
      }

    return <div className="profit-box">
        <div className="box-left">
            <div className="box-heading">{props.heading}</div>
            <div className="box-value">{props.value}</div>
            <div className="box-notation">
                <img src={props?.img || "+"} alt="+" />
                <div>{props.incDecValue}</div>
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
                  trailColor: "gold"
                })}
              />
            </Example>
        </div>
        
    </div>
}

export default ProfitBox