import { Carousel } from 'react-bootstrap';

import "./Slider.scss"

const Slider = () => {
    return (
        <Carousel className="header__carousel" controls={false} interval={null}>
        </Carousel>
    );
}

export default Slider;
