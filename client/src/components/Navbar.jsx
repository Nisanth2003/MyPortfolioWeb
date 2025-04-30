import React, { useContext } from 'react';
import { Link } from "react-scroll";
import { ThemeContext } from '../ThemeContext';
import './Navbar.css'; 

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <button className='theme-toggle' onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-60}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-60}>About</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-60}>Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-60}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
