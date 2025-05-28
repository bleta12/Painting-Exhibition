
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm py-3">
      <div className="container">
        {/* Logo */}
        <span className="navbar-brand fw-bold fs-4 text-black">ARTEVO</span>

        {/* Toggler for mobile */}
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

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3 d-none d-md-flex">
            {["Home", "Gallery", "Reviews"].map((item) => (
              <li className="nav-item mx-2" key={item}>
                <Link
                  className="nav-link text-secondary fw-medium"
                 to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary fw-medium">
              Sign In
            </button>
            <button className="btn btn-dark text-white fw-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
