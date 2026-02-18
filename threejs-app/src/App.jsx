import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProgramDetail from "./components/Home/ProgramDetail";
import Blog from "./components/Blog/Blog";
import TechnicalBlogs from "./components/Blog/TechnicalBlogs";
import EventBlogs from "./components/Blog/EventBlogs";
import BlogPostDetail from "./components/Blog/BlogPostDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/technical" element={<TechnicalBlogs />} />
        <Route path="/blog/events" element={<EventBlogs />} />
        <Route path="/blog/post/:id" element={<BlogPostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
