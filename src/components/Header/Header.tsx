import {FC} from "react";

import "./Header.scss"
import Slider from "@/components/Slider/Slider";
import ThemeToggle from "@/ui-components/ThemeToggle/ThemeToggle";
import SliderMobile from "@/components/Slider/SliderMobile";

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({}) => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="_container">
                    <div className="header__content">
                        <div className="header__theme-block theme-block">
                            <img src="img/logo.png" className="theme-block__image" alt="Logo eLearning"/>
                            <hr className="theme-block__line"/>
                            <p className="theme-block__text">Taking Learning to the Next Level</p>
                            <ThemeToggle/>
                        </div>
                        <Slider/>
                        <SliderMobile/>
                    </div>
                </div>
            </div>
            <div className="header__line"></div>
        </header>
    )
}

export default Header;