import { FC, useContext } from "react";

import "./Paginator.scss"
import { themeContext } from "@/context/ThemeContext";

interface PaginatorProps {
  page: number,
  nextPage: () => void,
  prevPage: () => void,
  setPage: (i: number) => void
  serviceLength: number,
}

const Paginator: FC<PaginatorProps> = ({page, nextPage, prevPage, setPage, serviceLength}) => {
  const {theme} = useContext(themeContext);

  const pageItems = [];

  const pageAmount = Math.ceil(serviceLength / 4);
  for (let i = 1; i <= pageAmount; i++) {
    pageItems.push(i);
  }

  return (
    <div className="service__paginator" hidden={pageItems.length <= 1}>
      <button
        className="service__btn"
        disabled={page == 1}
        onClick={prevPage}
        type="button"
      >
        <img src={`img/arrow-prev-${theme}.svg`} alt="Arrow previous page"/>
      </button>
      <div className="service__pages">
        {pageItems.map((item) => (
          <button
            type="button"
            key={item}
            className={`service__page${page == item ? " active" : ""}`}
            onClick={() => setPage(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="service__btn"
        disabled={page * 4 >= serviceLength}
        onClick={nextPage}
      >
        <img src={`img/arrow-next-${theme}.svg`} alt="Arrow previous page"/>
      </button>
    </div>
  )
}

export default Paginator;