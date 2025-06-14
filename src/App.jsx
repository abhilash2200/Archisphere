import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './View/Home';
import About from './View/About';
import Blog from './View/Blog';
import Contact from './View/Contact';
import Project from './View/Project';
import Services from './View/Services';
import Header from './components/Header'; // if you want a header

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> Remove if you don't want header on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
