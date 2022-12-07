import React from "react";
import Header from "./../component/Header";
import Title from "./../component/Title";

export default function Home(props) {
  return (
    <div>
      <Header />
      <Title blocks={props.blocks} />
      
    </div>
  );
}
