import {Carousel, CarouselItem} from 'react-bootstrap';

import "./Slider.scss"

const Slider = () => {
    return (
        <Carousel className="carousel header__carousel" controls={false} interval={null}>
            <CarouselItem>
                <div className="carousel__item">
                    <div className="carousel__slide">
                        <img src="public/slider/1.1_slide.png" alt="Services" className="carousel__image"/>
                        <p className="carousel__text">Services</p>
                    </div>
                    <div className="carousel__slide">
                        <img src="public/slider/1.2_slide.png" alt="Instructional Design" className="carousel__image"/>
                        <p className="carousel__text">Instructional Design</p>
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className="carousel__item">
                    <div className="carousel__slide">
                        <img src="public/slider/2.1_slide.png" alt="eLearning Development" className="carousel__image"/>
                        <p className="carousel__text">eLearning Development</p>
                    </div>
                    <div className="carousel__slide">
                        <img src="public/slider/2.2_slide.png" alt="eLearning Price Quote" className="carousel__image"/>
                        <p className="carousel__text">eLearning Price Quote</p>
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className="carousel__item">
                    <div className="carousel__slide">
                        <img src="public/slider/3.1_slide.png" alt="eLearning Packages" className="carousel__image"/>
                        <p className="carousel__text">eLearning Packages</p>
                    </div>
                    <div className="carousel__slide">
                        <div className="carousel__image"></div>
                        <div className="carousel__block">
                            <img src="public/icons/contact-us.svg" alt="Letter Icon" className="carousel__icon"/>
                            <p className="carousel__block-text">Contact us</p>
                        </div>
                    </div>
                </div>
            </CarouselItem>
        </Carousel>
    );
}

export default Slider;
