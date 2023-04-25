import {FC} from "react";

import "./BenefitsContent.scss"
import { BenefitsData } from "@/data/BenefitsData";

interface BenefitsContentProps {
    number: 1 | 2,
    data: BenefitsData
}

const BenefitsContent: FC<BenefitsContentProps> = ({number, data}) => {
    return (
        <div className={`benefits__content ${number === 1 ? 'first' : 'second'}`}>
            <img src={`public/img/instr-design-${number}.png`} className="benefits__image"/>
            <div className="benefits__info">
                <h4 className="benefits__subtitle">{data.title}</h4>
                <p className="benefits__text">{data.description}</p>
                {data.benefits.map((benefit, i) => (
                  <div className="benefits__item benefit" key={i}>
                      <img className="benefit__icon" src="public/img/line-md-confirm.svg"/>
                      <p className="benefit__text">{benefit}</p>
                  </div>
                ))}
            </div>
        </div>
    )
}

export default BenefitsContent;