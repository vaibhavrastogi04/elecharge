import React from "react";
import "../Navbar/Navbar.scss";
import * as svg from "../../constants/svg/svg_assets";

const Navbar = () => (
  <div className="navbar">
    <div className="logoPlusMenu">
      <div className="logo">
        <svg.ElechargeLogo />
      </div>

      <div className="hamburgerMenu">
        <svg.HamburgerMenuIcon />
      </div>
    </div>
    <div className="shareMenu">
      <div className="shareIcon">
        <svg.ShareIcon />
      </div>
      <div className="getApp">
        <p>Get App</p>
      </div>
      <div className="imageContainer">
        <img
          src="src\assets\images\navbar_image.jpeg"
          alt="Mouth of an EV charger"
        />
      </div>
    </div>

    <div className="navbarFields"></div>
  </div>
);

export default Navbar;
