import { FC, useContext, useState } from "react";

import "./Occupation.scss"
import { occupations } from "@/data/ServicesData";
import { Context } from "@/context/ThemeContext";

interface OccupationProps {

}

const Occupation: FC<OccupationProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {theme} = useContext(Context);
  const [selectedOccupation, setSelectedOccupation] = useState('All');

  const handleOccupationSelect = (color: string) => {
    setSelectedOccupation(color);
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
          <div className="occupation-picker__option">{selectedOccupation}</div>
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