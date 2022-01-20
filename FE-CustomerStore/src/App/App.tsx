import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "../Categories/Categories";
import Navbar, { NavBarLink } from "../Components/Navbar";
import Home from "../Pages/Home";
import Footer from "./Footer";

var topNav: NavBarLink[] = [
  { url: '/', display: 'Home' },
  { url: '/login', display: 'Login' },
];

var middleNav: NavBarLink[] = [
  { url: '/', display: 'Store' }
];

function App() {
  return (
    <div className="container mx-auto">
      <nav className="w-full">
        <Navbar links={topNav}/>
      </nav>
      <div className="w-full">
        <img src="https://via.placeholder.com/150" />
      </div>
      <div className="w-full">
        <Navbar links={middleNav}/>
      </div>
      <div className="w-full flex flex-row items-stretch">
        <div className="flex-none w-1/5">
          <Categories />
        </div>
        <div className="grow">
          <Routes>
            <Route path="/" element={ <Home /> } />
          </Routes>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;