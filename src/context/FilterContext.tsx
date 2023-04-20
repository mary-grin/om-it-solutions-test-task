import { createContext, FC, ReactNode, useState } from "react";
import { serviceData, ServicesData } from "@/data/ServicesData";

export const filterContext = createContext<{
  services: ServicesData[],
  changeFilter: (search: string, type: string, occupation: string) => void
}>({
  services: serviceData,
  changeFilter: () => {}
});

interface FilterContextProps {
  children: ReactNode;
}

const FilterContext: FC<FilterContextProps> = ({ children }) => {
  const [services, setServices] = useState<ServicesData[]>(serviceData)

  const changeFilter = (search: string, type: string, occupation: string) => {
    const filteredData = serviceData
      .filter(item => search === '' || item.title.toLowerCase().includes(search.toLowerCase()))
      .filter(item => type === 'All' || type === item.color)
      .filter(item => occupation === 'All' || occupation === item.title);
    setServices([...filteredData]);
  }

  return (
    <filterContext.Provider value={{ services, changeFilter }}>
      {children}
    </filterContext.Provider>
  );
};

export default FilterContext;
