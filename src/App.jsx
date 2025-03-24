import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Home from "./Pages/Home";
import About from "./Pages/About";
import ImageGenerator from "./Pages/ImageGenerator";
import Login from "./Pages/Login";
import Authentication from "./Components/Authentication";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);
  
  return (
    <Router>
      {user ? (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/image-generator" element={<ImageGenerator />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
