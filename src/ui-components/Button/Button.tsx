import {FC} from "react";

import "./Button.scss"

interface ButtonProps {

}

const Button: FC<ButtonProps> = ({}) => {
    return (
        <button type="button" className="form__button">Send</button>
    )
}

export default Button;