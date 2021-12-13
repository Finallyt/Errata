import React, { useState } from "react";
import { Route, BrowserRouter, Router, Switch, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import HostForm from "./host";
import Content from "./Content";

function Header() {
  return (
    <div className="App">
      <title></title>

      <div>
        <header className="header">
          <div>
            <div>
              <h1> Errata </h1>
            </div>
          </div>

          <div className="selectbox">
            <Link to="hostForm" className="link">
              <Button className="hostbutton">Host</Button>
            </Link>
            <Link to="invest" className="link">
              {" "}
              <Button className="investbutton">Invest</Button>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
