import { FC } from "react";

import ServiceCard from "@/ui-components/ServiceCard/ServiceCard";

import "./ServicesBlock.scss";
import { serviceData } from "@/data/ServicesData";
import Toolbar from "@/components/Toolbar/Toolbar";

interface ServicesBlockProps {}

const ServicesBlock: FC<ServicesBlockProps> = ({}) => {
  return (
    <section id="services" className="services">
      <div className="_container">
        <div className="service">
          <h2 className="service__title">Services We Provide</h2>
          <Toolbar/>
          <div className="service__cards">
            {serviceData.map((el, i) => <ServiceCard key={i} service={el}/>)}
          </div>
        </div>
      </div>
    </section>
  )
};

export default ServicesBlock;
