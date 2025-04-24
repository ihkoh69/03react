import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ListComp from "./components/ListComp";
import WriteComp from "./components/WriteComp";

function App() {
  return (
    <>
      <div className="container flex justify-between py-4 mx-auto">
        <h1>
          <Link to="/">로고</Link>
        </h1>
        <nav>
          <ul className="flex gap-3 text-blue-300">
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/write">글작성</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<ListComp />} />
          <Route path="/write" element={<WriteComp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
