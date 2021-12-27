import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Admin from "../Pages/Admin";
import Home from "../Pages/Home";

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