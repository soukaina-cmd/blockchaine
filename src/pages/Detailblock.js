import React from "react";
import Detail from "../component/Detail";

export default function Detailblock(props) {
  return (
    <div className="container-fluid">
      <Detail blocks={props.blocks} />
    </div>
  );
}
