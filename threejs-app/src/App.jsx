import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProgramDetail from "./components/Home/ProgramDetail";
<<<<<<< HEAD
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Blog from "./components/Home/Blog";
import CareersPage from "./components/Careers/CareersPage";
import About from "./components/About/About";
=======
import Blog from "./components/Blog/Blog";
import TechnicalBlogs from "./components/Blog/TechnicalBlogs";
import EventBlogs from "./components/Blog/EventBlogs";
import BlogPostDetail from "./components/Blog/BlogPostDetail";
>>>>>>> adarsh-feature

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
<<<<<<< HEAD
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<CareersPage />} />
=======
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/technical" element={<TechnicalBlogs />} />
        <Route path="/blog/events" element={<EventBlogs />} />
        <Route path="/blog/post/:id" element={<BlogPostDetail />} />
>>>>>>> adarsh-feature
      </Routes>
    </div>
  );
}

export default App;
