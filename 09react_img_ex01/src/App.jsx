import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ListComp from "./components/ListComp";
import WrtieComp from "./components/WrtieComp";

function App() {
  return (
    <>
      <nav className="container flex justify-between py-4 mx-auto">
        <h3>
          <Link to="/">Logo</Link>
        </h3>
        <div className="flex gap-3">
          <Link to="/">홈</Link>
          <Link to="/write">글쓰기</Link>
        </div>
      </nav>
      <hr />
      <div>
        <Routes>
          <Route path="/" element={<ListComp />} />
          <Route path="/write" element={<WrtieComp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
