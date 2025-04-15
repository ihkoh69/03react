import React from "react";
import HomeComp from "./components/HomeComp";
import ListComp from "./components/ListComp";
import ViewComp from "./components/ViewComp";
import CommentComp from "./components/CommentComp";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/list" element={<ListComp />} />
        <Route path="/view/:id" element={<ViewComp />} />
        <Route path="/view/1/comment" element={<CommentComp />} />
      </Routes>
    </>
  );
}

export default App;
