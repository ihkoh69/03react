import { Route, Routes } from "react-router-dom";
import HomeComp from "./components/HomeComp";
import PostListComp from "./components/PostListComp";
import NavComp from "./components/NavComp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeComp />} />
      <Route path="/list" element={<PostListComp />} />
    </Routes>
  );
}

export default App;
