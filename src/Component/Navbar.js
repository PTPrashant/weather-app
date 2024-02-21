import React from "react";
import { HashLink } from "react-router-hash-link";
// import SmoothScroll from "smooth-scroll";
import { Link } from "react-scroll";

// <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//   <span className="navbar-toggler-icon"></span>
// </button>
const Navbar = () => {


  return (
    <div style={{ position: "fixed", width:'100%' }}>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">
            Weather App
          </a>

          <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className=" onHover nav-item">
                <Link
                  to="weather"
                  data-scroll
                  smooth={true}
                  spy={true}
                  duration={300}
                  className="nav-link active text-light"
                  aria-current="page"
                >
                  Weather
                </Link>
              </li>

              <li className="onHover nav-item">
                <Link
                  to="about"
                  smooth={true}
                  spy={true}
                  duration={300}


                  className="nav-link active text-light"
                  aria-current="page"
                >
                  About
                </Link>
              </li>

              <li className="onHover nav-item">
                <Link
                  to="footer"
                  smooth={true}
                  spy={true}
                  duration={300}


                  className="nav-link active text-light"
                  aria-current="page"
                >
                  Footer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
