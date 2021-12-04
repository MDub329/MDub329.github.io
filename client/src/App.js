import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, About, Social, Projects } from "./components";
import './App.css';
import './background.css'

function App() {


  return (
    <div className="App gradient-background">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/social" exact element={<Social />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
