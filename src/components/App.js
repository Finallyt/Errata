import React, { useState } from "react";
import Header from "./header";
import Content from "./Content";
import { Route, BrowserRouter, Router, Switch, Routes } from "react-router-dom";
import Defense from "./Defense";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./styles.css";
import HostForm from "./host";
import Attack from "./attack";

function App() {
  return (
    <>
      <Header />
      <hr className="line" />

      <Routes>
        <Route path="hostForm" element={<HostForm />} />
        <Route path="invest" element={<Content />} />
        <Route path="attack" element={<Attack />} />
      </Routes>
    </>
  );
}

export default App;
