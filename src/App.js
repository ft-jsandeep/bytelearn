import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import BlogDetail from "./pages/BlogDetail";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import CategoryBlogs from "./pages/CategoryBlogs";
import Others from "./pages/Others";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogDetail />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/:category" element={<CategoryBlogs />} />
        <Route path="*" element={<Others />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
