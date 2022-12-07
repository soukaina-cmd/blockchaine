import "antd/dist/antd.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { blocks } from "./data/Data";
import Detailblock from "./pages/Detailblock";
import Home from "./pages/Home";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      blocks: blocks,
    };
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home blocks={this.state.blocks} />} />
            <Route
              path="/detail/:id"
              element={<Detailblock blocks={this.state.blocks} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
