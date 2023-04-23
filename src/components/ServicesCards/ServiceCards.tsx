import { FC, useContext, useEffect, useState } from "react";

import Paginator from "@/components/Paginator/Paginator";
import { themeContext } from "@/context/ThemeContext";
import { ServicesData } from "@/data/ServicesData";
import ServiceCard from "@/ui-components/ServiceCard/ServiceCard";

interface ServicesCardsProps {
  services: ServicesData[];
}

const ServiceCards: FC<ServicesCardsProps> = ({ services }) => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1)
  }, [services.length])

  const prevPage = () => {
    setPage((page) => page - 1);
  };

  const nextPage = () => {
    setPage((page) => page + 1);
  };

  const changePage = (i: number) => {
    setPage(i);
  };

  const cards: ServicesData[] = [];
  for (let i = page * 4 - 4; i < page * 4; i++) {
    cards.push(services[i]);
  }

  return (
    <>
      <div className="service__cards">
        {cards.map((item, i) => item && <ServiceCard key={i} service={item} />)}
      </div>
      <Paginator
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
        setPage={changePage}
        serviceLength={services.length}
      />
    </>

  );
};

export default ServiceCards;
