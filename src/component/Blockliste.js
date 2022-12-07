import { Row } from "antd";
import React from "react";
import "../styles/Blockliste.css";

export default function Blockliste(props) {
  return (
    <div className="di">
      <Row>
        <span className="sp">
          {" "}
          <img
            className="img"
            src={require("../images/" + props.block.image)}
          />
        </span>
        <Row>
          <span className="h2">{props.block.titre}</span>
          <svg height={15} width={15} className="sv">
            <circle
              cx="9"
              cy="9"
              r="4"
              stroke="with"
              stroke-width="3"
              fill="green"
            />
          </svg>
        </Row>
        <Row>
          <div className="sa">
            <span>N° Slash:{props.block.Number}</span>
            <span>C.A:{props.block.number}</span>
          </div>
        </Row>
      </Row>
    </div>
  );
}
