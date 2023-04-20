import { FC, useContext, useState } from "react";

import "./ColorType.scss"
import { colors } from "@/data/ServicesData";
import { themeContext } from "@/context/ThemeContext";

interface ColorTypeProps {
    type: string
    setType: (type: string) => void
}

const ColorType: FC<ColorTypeProps> = ({type, setType}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {theme} = useContext(themeContext);

    const handleColorSelect = (color: string) => {
        setType(color);
        setIsOpen(false);
    };

    return (
      <div className="color-picker">
          <span className="color-picker__text">Type</span>
          {!isOpen &&
            <div
              className={`color-picker__header ${type.toLowerCase()}`}
              onClick={() => setIsOpen(true)}
            >
              <img className="color-picker__arrow" src={`icons/arrow-${theme}.svg`}/>
            </div>
          }
          {isOpen && (
            <>
              <div className="color-picker__dropdown">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`color-picker__option ${color.toLowerCase()}`}
                    onClick={() => handleColorSelect(color)}
                  />
                ))}
              </div>
              <div className="color-picker__close" onClick={() => setIsOpen(false)}>
                <img src={`icons/close-${theme}.svg`}/>
              </div>
            </>
          )}
      </div>
    );
}

export default ColorType;