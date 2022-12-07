import { Col, Row } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Titledetail.css";

export default function Titledetail(props) {
  let param = useParams();
  let MyChaine = props.blocks.filter((block) => {
    return block.id == param.id;
  })[0];

  return (
    <>
      <Row>
        <i className="fas fa-arrow-left s"></i>
        <Link to={"/home/" + MyChaine} className="s">
          Back
        </Link>
      </Row>
      <Row>
        <Col span={8}>
          <div className="sp">
            {" "}
            <img className="img" src={require("../images/" + MyChaine.image)} />
            <span className="h2">{MyChaine.titre}</span>
          </div>
        </Col>
        <Col span={15}>
          <div className="t">
            <img className="im" src={require("../images/" + MyChaine.img)} />
          </div>
          <div className="t">
            <img className="im" src={require("../images/" + MyChaine.img)} />
          </div>
          <div className="t">
            <img className="im" src={require("../images/" + MyChaine.val)} />
          </div>
        </Col>
      </Row>
    </>
  );
}
