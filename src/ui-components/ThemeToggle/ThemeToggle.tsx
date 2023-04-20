import { FC, useContext } from "react";

import { themeContext } from "@/context/ThemeContext";

import "./ThemeToggle.scss";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { theme, changeTheme } = useContext(themeContext);

  return (
    <label className="theme-toggle">
      <input
        className="theme-toggle__checkbox"
        tabIndex={1}
        type="checkbox"
        onChange={changeTheme}
      />
      <span className="theme-toggle__slider">
        <span className="theme-toggle__text">
          {theme === "light" ? "DAYMODE" : "NIGHTMODE"}
        </span>
      </span>
    </label>
  );
};

export default ThemeToggle;
