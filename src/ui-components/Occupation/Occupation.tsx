import { FC, useContext, useState } from "react";

import "./Occupation.scss"
import { occupations } from "@/data/ServicesData";
import { themeContext } from "@/context/ThemeContext";

interface OccupationProps {
  occupation: string,
  setOccupation: (occupation: string) => void
}

const Occupation: FC<OccupationProps> = ({occupation, setOccupation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {theme} = useContext(themeContext);

  const handleOccupationSelect = (color: string) => {
    setOccupation(color);
    setIsOpen(false);
  };

  return (
    <div className="occupation-picker">
      <span className="occupation-picker__text">Occupation</span>
      {!isOpen &&
        <div
          className={`occupation-picker__header`}
          onClick={() => setIsOpen(true)}
        >
          <div className="occupation-picker__option">{occupation}</div>
          <img className="occupation-picker__arrow" src={`icons/arrow-${theme}.svg`}/>
        </div>
      }
      {isOpen && (
        <>
          <div className="occupation-picker__dropdown">
            {occupations.map((occupation, index) => (
              <div
                key={index}
                className={`occupation-picker__option`}
                onClick={() => handleOccupationSelect(occupation)}
              >{occupation}</div>
            ))}
            <div className="occupation-picker__close" onClick={() => setIsOpen(false)}>
              <img src={`icons/close-${theme}.svg`}/>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Occupation;