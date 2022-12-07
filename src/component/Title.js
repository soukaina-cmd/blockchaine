import { Col, Input, Row } from "antd";
import React from "react";
import "../styles/Title.css";
import Blockliste from "./Blockliste";

const { Search } = Input;
export default function Title(props) {
  return (
    <div className="div">
      <Row>
        <Col span={12} offset={6}>
          <h1 className="h1">Cosmos Blockchains</h1>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={4}>
          <Search size="large" className="inpu" placeholder="Search " />
        </Col>
      </Row>

      <div>
        {props.blocks.map((block) => {
          return <Blockliste key={block.id} block={block} />;
        })}
      </div>
    </div>
  );
}
