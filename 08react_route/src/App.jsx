import { Route, Routes } from "react-router-dom";
import HomeComp from "./components/HomeComp";
import PostListComp from "./components/PostListComp";
// import NavComp from "./components/NavComp";
import ViewComp from "./components/ViewComp";
import CommentComp from "./components/CommentComp.";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeComp />} />
      <Route path="/list" element={<PostListComp />} />
      <Route path="/view/:id" element={<ViewComp />} />
      <Route path="/view/:id/comment" element={<CommentComp />} />
    </Routes>
  );
}

export default App;
