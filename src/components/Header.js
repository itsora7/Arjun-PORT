import React from "react";

import logo from "../assets/Logoo.png";
const Header = () => {
  return (
    <header className="bg-green-200 py-1" id="home">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="home" className="w-20 h-11">
            <img src={logo} alt="logo" />
          </a>
          <button className="btn btn-sm">Join Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
