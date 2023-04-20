import { FC, useContext } from "react";

import Slider from "@/components/Slider/Slider";
import SliderMobile from "@/components/Slider/SliderMobile";
import { themeContext } from "@/context/ThemeContext";
import ThemeToggle from "@/ui-components/ThemeToggle/ThemeToggle";

import "./Header.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const { theme } = useContext(themeContext);

  return (
    <header className="header">
      <div className="header__container">
        <div className="_container">
          <div className="header__content">
            <div className="header__theme-block theme-block">
              <img
                src={`img/logo-${theme}.png`}
                className="theme-block__image"
                alt="Logo eLearning"
              />
              <hr className="theme-block__line" />
              <p className="theme-block__text">
                Taking Learning to the Next Level
              </p>
              <ThemeToggle />
            </div>
            <Slider />
            <SliderMobile />
          </div>
        </div>
      </div>
      <div className="header__line"></div>
    </header>
  );
};

export default Header;
