import {Carousel, CarouselItem} from 'react-bootstrap';

import "./Slider.scss"

const SliderMobile = () => {
    return (
        <Carousel className="carousel header__carousel-mobile" controls={false} interval={3000}>
            <CarouselItem>
                <div className="carousel__slide">
                    <img src="public/slider/1.1_slide.png" alt="Services" className="carousel__image"/>
                    <p className="carousel__text">Services</p>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className="carousel__slide">
                    <img src="public/slider/1.2_slide.png" alt="Instructional Design" className="carousel__image"/>
                    <p className="carousel__text">Instructional Design</p>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className="carousel__slide">
                    <img src="public/slider/2.1_slide.png" alt="eLearning Development" className="carousel__image"/>
                    <p className="carousel__text">eLearning Development</p>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className="carousel__slide">
                    <img src="public/slider/2.2_slide.png" alt="eLearning Price Quote" className="carousel__image"/>
                    <p className="carousel__text">eLearning Price Quote</p>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className="carousel__slide">
                    <img src="public/slider/3.1_slide.png" alt="eLearning Packages" className="carousel__image"/>
                    <p className="carousel__text">eLearning Packages</p>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className="carousel__slide">
                    <img src="public/slider/3.2_slide.png" alt="Contact us" className="carousel__image"></img>
                    <div className="carousel__block">
                        <img src="public/icons/contact-us.svg" alt="Letter Icon" className="carousel__icon"/>
                        <p className="carousel__block-text">Contact us</p>
                    </div>
                </div>
            </CarouselItem>
        </Carousel>
    );
}

export default SliderMobile;