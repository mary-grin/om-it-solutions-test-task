import {FC} from "react";

import "./Header.scss"
import Slider from "@/components/Slider/Slider";

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({}) => {
    return (
        <header className="container">
            <Slider/>
        </header>
    )
}

export default Header;