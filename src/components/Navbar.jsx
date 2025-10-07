import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/bslogo.png";
import { Menu, X } from "lucide-react"; // nice minimal icons

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbarr">
      <div className="nav-container">
        <div className="nav-left">
          <img src={logo} alt="logo" className="logo" />
          <h2 className="brainstrain">BrainStrain'25</h2>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <X size={26} color="#eadecb" /> : <Menu size={26} color="#eadecb" />}
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={currentPath === "/" ? "active" : ""}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/Events"
            className={currentPath === "/Events" ? "active" : ""}
            onClick={closeMenu}
          >
            Events
          </Link>
          <Link
            to="/Register"
            className={currentPath === "/Register" ? "active" : ""}
            onClick={closeMenu}
          >
            Register
          </Link>
          {(currentPath !== "/Events" &&
            currentPath !== "/Register" &&
            currentPath !== "/Ca") && (
            <a href="#Contact" onClick={closeMenu}>
              Contact
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
