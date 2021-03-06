import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            Employee Directory
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
