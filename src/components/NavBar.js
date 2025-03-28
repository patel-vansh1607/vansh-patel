import { useState } from "react";
import "../styles/NavBar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li className="dropdown">
          <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
              <li><a href="#">Option 3</a></li>
            </ul>
          )}
        </li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
