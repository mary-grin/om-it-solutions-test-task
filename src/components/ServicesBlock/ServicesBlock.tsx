import { FC, useContext } from "react";

import "./ServicesBlock.scss";
import "../../styles/border.scss"
import Toolbar from "@/components/Toolbar/Toolbar";
import { filterContext } from "@/context/FilterContext";
import ServiceCards from "@/components/ServicesCards/ServiceCards";

interface ServicesBlockProps {}

const ServicesBlock: FC<ServicesBlockProps> = ({}) => {
  const {services} = useContext(filterContext);

  return (
    <section id="services" className="services">
      <div className="_container">
        <div className="service half-border half-border-left half-border-start">
          <div className="service__content">
            <h2 className="service__title title">Services We Provide</h2>
            <Toolbar/>
            {!services.length && <p className="service__text">Nothing to show :(</p>}
            <ServiceCards services={services}/>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ServicesBlock;
