import React, { useState } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Defense from "./Defense";
import { BrowserRouter, Router, Switch, Route, Routes } from "react-router-dom";
import { Link } from "@mui/material";
import Attack from "./attack";

function Content() {
  let [프로젝트명, 프로젝트명변경] = useState([
    "Near Protocol",
    "Terra Protocol",
    "Cosmos"
  ]);
  return (
    <div className="wrapper">
      <div className="Content">
        <div className="lists">
          <div className="list">
            <h2 className="project">{프로젝트명[0]}</h2>
            <div className="cta">
              <Button className="button">Attack</Button>
              <Button className="button defense">Defense</Button>
            </div>
          </div>

          <div className="list">
            <h2 className="project">{프로젝트명[1]}</h2>

            <div className="cta">
              <Link to="Attack">
                <Button className="button">Attack</Button>
              </Link>
              <Button className="button defense">Defense</Button>
            </div>
          </div>

          <div className="list">
            <h2 className="project">{프로젝트명[2]}</h2>
            <div className="cta">
              <Button className="button">Attack</Button>
              <Button className="button defense">Defense</Button>
            </div>
          </div>
        </div>
        <div className="texts">하이루</div>
      </div>
    </div>
  );
}

export default Content;
