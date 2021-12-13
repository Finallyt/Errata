import React, { useState } from "react";
import Header from "./components/header";
import Content from "./components/Content";
import { Route, BrowserRouter, Router, Switch, Routes } from "react-router-dom";
import Defense from "./components/Defense";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
