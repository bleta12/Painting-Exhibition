import React from "react";

const Navbar = ({ onReviewsClick }) => {
  const navItems = ["Home", "Gallery", "Reviews", "Support"];

  const handleClick = (item) => {
    if (item === "Reviews") {
      onReviewsClick();
    }
  };

  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm py-3">
      <div className="container">
        <span className="navbar-brand fw-bold fs-4 text-black">ARTEVO</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3 d-none d-md-flex">
            {navItems.map((item) => (
              <li className="nav-item mx-2" key={item}>
                <a
                  className="nav-link text-secondary fw-medium"
                  href="#"
                  onClick={() => handleClick(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary fw-medium">Sign In</button>
            <button className="btn btn-dark text-white fw-medium">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
