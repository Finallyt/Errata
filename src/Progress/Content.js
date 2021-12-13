import React, { useState } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Defense from "./Defense";
import "./ProgressBar.css";

function Content() {
  const ProgressBar = ({ width, percent }) => {
    let progress = percent * width;

    return (
      <div className="progress-div" style={{ width: width }}>
        <div style={{ width: `${progress}px` }} className="progress" />
      </div>
    );
  };
  let [프로젝트명, 프로젝트명변경] = useState([
    "Near Protocol",
    "Terra Protocol",
    "Cosmos"
  ]);
  let [프로젝트링크, 프로젝트링크변경] = useState([""]);
  const abutton = (
    <Button className="abutton" variant="outlined">
      attack
    </Button>
  );
  const dbutton = (
    <Button className="dbutton" variant="outlined">
      Defense
    </Button>
  );
  const MovieList = styled.div`
    margin-top: 10px;
    color: black;
  `;

  return (
    <div className="Content">
      <div className="list">
        <h2>
          {프로젝트명[0]}
          <span>{abutton}</span>
          <span>{dbutton}</span>
        </h2>
        <ProgressBar />
        <hr />
      </div>

      <div className="list">
        <h2>
          {프로젝트명[1]} <span>{abutton}</span>
          {dbutton}{" "}
        </h2>
        <hr />
      </div>

      <div className="list">
        <h2>
          {프로젝트명[2]} <span>{abutton}</span>
          {dbutton}
        </h2>
        <hr />
      </div>
    </div>
  );
}

export default Content;
