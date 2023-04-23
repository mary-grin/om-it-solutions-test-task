import {FC} from "react";

import "./Form.scss"
import Input from "@/ui-components/Input/Input";
import Button from "@/ui-components/Button/Button";

interface FormProps {

}

const Form: FC<FormProps> = ({}) => {
    return (
        <form className="form-block__form form">
            <Input type="text" placeholder="Enter your Name"/>
            <Input type="text" placeholder="Enter your Email Address"/>
            <textarea placeholder="Your Message" className="form__input form__textarea"/>
            <Button/>
        </form>
    )
}

export default Form;