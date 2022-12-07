import { Col, Row } from "antd";
import React from "react";
import "../styles/Header.css";
export default function Header() {
  return (
    <div>
      <Row className="ro">
        <Col span={1} offset={2}>
          <img
            src={require("../images/parnasse--logo--01_720.png")}
            width="40"
            height="40"
          />
        </Col>
        <Col span={2}>
          <span className="sp1">Dashbord</span>
          <span className="sp2">Validators</span>
        </Col>
        <Col span={4} offset={14}>
          <span className="cw">Connect wallet</span>
          <i className="fa-solid fa-bars i"></i>
        </Col>
      </Row>
    </div>
  );
}
