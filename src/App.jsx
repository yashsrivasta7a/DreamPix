import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ImageGenerator from "./Pages/ImageGenerator";
import Login from "./Pages/Login";
import Authentication from "./Components/Authentication";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar";

function App() {

  return (
    <Router>
        <>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/image-generator" element={<ImageGenerator />} />
          </Routes>
        </>
    </Router>
  );
}

export default App;
