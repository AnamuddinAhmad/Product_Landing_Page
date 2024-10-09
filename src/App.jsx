import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import SimpleSolution from "./components/SimpleSolution";
import Agency from "./components/Agency";
import { Feedback } from "./components/Feedback";
import Footer from "./components/Footer";
import Achivment from "./components/Achivment";
import Contact from "./components/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  

  return (
    <div className="w-full">
      <NavBar />
      <Home />
      <Achivment />
      <Services />
      <SimpleSolution />
      <Agency />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
