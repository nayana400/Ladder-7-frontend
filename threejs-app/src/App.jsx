import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProgramDetail from "./components/Home/ProgramDetail";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Blog from "./components/Home/Blog";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
