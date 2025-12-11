import React, { useState } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <span>L.O.U</span>

      {/* ICON TOGGLE */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>Home</li>
        <li>Constellations</li>
        <li>Orbit</li>
        <li>Testimonials</li>
        <li>Works</li>
        <li>About Us</li>
      </ul>

      <h4>Contact</h4>
    </nav>
  );
};

export default Navbar;
