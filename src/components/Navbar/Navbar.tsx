import { useState } from "react";

import "./Navbar.scss";
import NavbarLink from "@/components/NavbarLink/NavbarLink";

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="navbar">
      <div className="_container">
        <div className="navbar__content">
          <img
            src="img/logo-dark.png"
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
              <NavbarLink title="Home" href="#home" onClick={() => setActive(false)}/>
              <NavbarLink title="Services" href="#services" onClick={() => setActive(false)}/>
              <NavbarLink title="Instructional Design" href="#benefits_first" onClick={() => setActive(false)}/>
              <NavbarLink title="eLearning Development" onClick={() => setActive(false)}/>
              <NavbarLink title="eLearning Price Quote" onClick={() => setActive(false)}/>
              <NavbarLink title="eLearning Packages" onClick={() => setActive(false)}/>
              <NavbarLink title="Contact" href="#form-block" onClick={() => setActive(false)}/>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
