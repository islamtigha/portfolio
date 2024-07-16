import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              to="/home"
              onClick={closeMenu}
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/project_1"
              onClick={closeMenu}
              className="navbar--content"
            >
              my store
            </Link>
          </li>
          <li>
            <Link
              to="/project_2"
              onClick={closeMenu}
              className="navbar--content"
            >
              Moubli
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="navbar--content"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              onClick={closeMenu}
              className="navbar--content"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
      <Link
        to="https://github.com/islamtigha"
        onClick={closeMenu}
        className="btn btn-outline-primary"
      >
        Github account
      </Link>
    </nav>
  );
}

export default Navbar;
