import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ComponentLifeCycle } from "./ComponentLifeCycle";
import Home from "./Home";
import UserProfile from "./UserProfile";
function App() {
  return (
    <div className="home">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ComponentLifeCycle" element={<ComponentLifeCycle />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
