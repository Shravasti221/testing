import React from "react";
//import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage.js";
import AboutUsPage from "../AboutUs/AboutUsPage.js";
import TeamPage from "../Team/TeamPage.js";
import ContactUsPage from "../ContactUsPage.js";
import PastProjectPage from "../Project/PastProjectPage.js";
import PresentProjectPage from "../Project/PresentProjectPage.js";
import "bootstrap/dist/css/bootstrap.min.css";
//import AstraLogo from "../helpers/images/astra_logo_white.png";

function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-right navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  Astra
                </Link>
              </li>
              <li>
                <Link to={"/team"} className="nav-link">
                  Team
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Projects
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <Link to={"/presentprojects"} className="nav-link">
                        Present projects
                      </Link>
                    </li>
                    <li>
                      <Link to={"/pastprojects"} className="nav-link">
                        Past projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link to={"/contact"} className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/presentproject" element={<PresentProjectPage />} />
            <Route exact path="/pastprojects" element={<PastProjectPage />} />
            <Route exact path="/team" element={<TeamPage />} />
            <Route exact path="/contact" element={<ContactUsPage />} />
            <Route exact path="/about" element={<AboutUsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
