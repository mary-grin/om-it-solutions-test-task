import {FC} from "react";

import "./Input.scss"

interface InputProps {
    type: string,
    placeholder: string
}

const Input: FC<InputProps> = ({type, placeholder}) => {
    return (
        <input type={type} placeholder={placeholder} className="form__input"/>
    )
}

export default Input;