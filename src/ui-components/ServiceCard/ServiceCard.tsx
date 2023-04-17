import { FC } from "react";

import { ServicesData } from "@/data/ServicesData";

import "./ServiceCard.scss";

interface ServiceCardProps {
  service: ServicesData;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  const { title, description, icon, color } = service;
  return (
    <div className={`service-card ${color}`}>
      <div className="card__image">
        <img src={icon} alt={`${title} Icon`} className="card__icon" />
      </div>
      <h4 className="card__title">{title.toUpperCase()}</h4>
      <hr className="card__line" />
      <p className="card__text">{description}</p>
    </div>
  );
};

export default ServiceCard;
