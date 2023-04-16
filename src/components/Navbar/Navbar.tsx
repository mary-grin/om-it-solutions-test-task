import { FC } from "react";

import "./Navbar.scss";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="navbar">
      <div className="_container">
        <div className="navbar__content">
          <img
            src="public/img/logo-dark.png"
            alt="Logo eLearning"
            className="navbar__logo"
          />
          <nav className="navbar__menu">
            <div className="menu__icon">
              <span></span>
            </div>
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Home
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Services
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Instructional Design
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  eLearning Development
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  eLearning Price Quote
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  eLearning Packages
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
