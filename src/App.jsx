import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Portfolio from "./pages/Portfolio/Portfolio";


function App() {

  return (
    <Router basename="/MyJourney">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
