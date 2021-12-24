import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/admin" element={ <Admin /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;