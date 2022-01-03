import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Admin from "../Pages/Admin";
import Home from "../Pages/Home";

function App() {
  return (
    <div className="container mx-auto">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full">
        <img src="https://via.placeholder.com/150" />
      </div>
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full flex flex-row items-stretch">
        <div className="flex-none w-1/5">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <div className="grow">
          <Routes>
            <Route path="/admin" element={ <Admin /> } />
            <Route path="/" element={ <Home /> } />
          </Routes>
        </div>
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
}

export default App;