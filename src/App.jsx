import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./View/Home";
import About from "./View/About";
import Blog from "./View/Blog";
import Contact from "./View/Contact";
import Projects from "./View/Project";
import Services from "./View/Services";
import Header from "./components/Header"; // if you want a header
import Pagenotfound from "./View/Pagenotfound";
import AmmanRotanaHotel2019 from "./View/AmmanRotanaHotel2019";
import TheRoleOfTechnologyInModernArchitecture from "./View/TheRoleOfTechnologyInModernArchitecture";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> Remove if you don't want header on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route
          path="/project/amman-rotana-hotel-2019"
          element={<AmmanRotanaHotel2019 />}
        />
        <Route
          path="/blog/the-role-of-technology-in-modern-architecture"
          element={<TheRoleOfTechnologyInModernArchitecture />}
        />
      </Routes>
    </BrowserRouter>
  );
}
