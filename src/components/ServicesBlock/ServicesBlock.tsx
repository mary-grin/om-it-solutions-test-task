import { FC } from "react";

import ServiceCard from "@/ui-components/ServiceCard/ServiceCard";

import "./ServicesBlock.scss";
import { serviceData } from "@/data/ServicesData";

interface ServicesBlockProps {}

const ServicesBlock: FC<ServicesBlockProps> = ({}) => {
  return (
    <section>
      <div className="_container">
        <div className="service__cards">
          {serviceData.map((el, i) => <ServiceCard key={i} service={el}/>)}
        </div>
      </div>
    </section>
  )
};

export default ServicesBlock;
