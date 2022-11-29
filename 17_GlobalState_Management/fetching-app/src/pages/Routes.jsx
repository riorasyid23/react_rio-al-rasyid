import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Home from "./Home";
import AboutApp from "./AboutApp";
import AboutAuthor from "./AboutAuthor";
import PageNotFound from "./PageNotFound";

const Routed = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutapp" element={<AboutApp />} />
        <Route path="/aboutauthor" element={<AboutAuthor />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default Routed;
