import { FC, useState } from "react";

import "./Navbar.scss";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="navbar">
      <div className="_container">
        <div className="navbar__content">
          <img
            src="/img/logo-dark.png"
            alt="Logo eLearning"
            className="navbar__logo"
          />
          <div
            className={`menu__icon${active ? " active" : ""}`}
            onClick={() => {
              setActive((state) => !state);
            }}
          >
            <span></span>
          </div>
          <nav className={`navbar__menu${active ? " active" : ""}`}>
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
