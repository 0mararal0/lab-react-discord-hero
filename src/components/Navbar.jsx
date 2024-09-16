import React from "react";
import logo from "../../public/image/discordLogo.png";
import menu from "../../public/image/menuIcon.png";
import "../App.css";

export const Navbar = () => {
  return (
    <header className="navbarApp">
      <img className="logo" src={logo} alt="logo" />
      <img className="menuIcon" src={menu} alt="iconMenu" />
    </header>
  );
};
