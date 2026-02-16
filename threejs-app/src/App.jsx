import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProgramDetail from "./components/Home/ProgramDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
      </Routes>
    </div>
  );
}

export default App;
