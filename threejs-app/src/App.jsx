import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetail from "./components/Home/Products/ProductDetail";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import CareersPage from "./components/Careers/CareersPage";
import ServicesPage from "./components/Services/ServicesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </div>
  );
}

export default App;
