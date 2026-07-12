import './App.css'
import { Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import ProfileLayout from "./components/ProfileLayout/ProfileLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Portfolio from "./pages/Portfolio/Portfolio";


function App() {

  return (
    <Routes basename="/">
      <Route element={<Layout />}>

        <Route element={<ProfileLayout />}>
          <Route index element={<Home />} />
          <Route path="/om-mig" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Route>        
        
        <Route path="/utbildning" element={<Education />} />
        <Route path="/yrkesbakgrund" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  )
}

export default App
