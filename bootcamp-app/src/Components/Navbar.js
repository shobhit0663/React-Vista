import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-dark");
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">Brand</Link> {/* ✅ Fixed */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>  {/* ✅ Fixed */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>  {/* ✅ Fixed */}
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                Services
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/services/web-development">Web Development</Link></li>
                <li><Link className="dropdown-item" to="/services/app-development">App Development</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/services/seo">SEO Optimization</Link></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <button className="btn btn-outline-secondary ms-3" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
