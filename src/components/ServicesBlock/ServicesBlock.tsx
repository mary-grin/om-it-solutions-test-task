import { FC, useContext } from "react";

import ServiceCard from "@/ui-components/ServiceCard/ServiceCard";

import "./ServicesBlock.scss";
import Toolbar from "@/components/Toolbar/Toolbar";
import { filterContext } from "@/context/FilterContext";
import ServiceCards from "@/components/ServicesCards/ServiceCards";

interface ServicesBlockProps {}

const ServicesBlock: FC<ServicesBlockProps> = ({}) => {
  const {services} = useContext(filterContext);

  return (
    <section id="services" className="services">
      <div className="_container">
        <div className="service">
          <div className="service__content">
            <h2 className="service__title title">Services We Provide</h2>
            <Toolbar/>
            {!services.length && <p>Nothing to show :(</p>}
            <ServiceCards services={services}/>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ServicesBlock;
