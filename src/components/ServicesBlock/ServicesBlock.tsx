import { FC, useContext } from "react";

import ServiceCard from "@/ui-components/ServiceCard/ServiceCard";

import "./ServicesBlock.scss";
import Toolbar from "@/components/Toolbar/Toolbar";
import { filterContext } from "@/context/FilterContext";

interface ServicesBlockProps {}

const ServicesBlock: FC<ServicesBlockProps> = ({}) => {
  const {services} = useContext(filterContext);

  return (
    <section id="services" className="services">
      <div className="_container">
        <div className="service">
          <h2 className="service__title">Services We Provide</h2>
          <Toolbar/>
          <div className="service__cards">
            {services.map((el, i) => <ServiceCard key={i} service={el}/>)}
          </div>
        </div>
      </div>
    </section>
  )
};

export default ServicesBlock;
