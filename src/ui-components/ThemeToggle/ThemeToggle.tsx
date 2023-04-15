import {FC, useContext, useState} from "react";

import "./ThemeToggle.scss"
import {ThemeContext} from "@/App";

interface ThemeToggleProps {

}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
    const {theme, changeTheme} = useContext(ThemeContext);

    return (
        <label className="theme-toggle">
            <input className="theme-toggle__checkbox" type="checkbox" onChange={changeTheme}/>
            <span className="theme-toggle__slider">
                <span className="theme-toggle__text">{theme === "light" ? "DAYMODE" : "NIGHTMODE"}</span>
            </span>
        </label>
    )
}

export default ThemeToggle;