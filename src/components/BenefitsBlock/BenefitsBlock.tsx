import {FC} from "react";

import "./BenefitsBlock.scss"
import BenefitsContent from "@/components/BenefitsContent/BenefitsContent";
import { firstBenefitsBlock, secondBenefitsBlock } from "@/data/BenefitsData";

interface BenefitsBlockProps {

}

const BenefitsBlock: FC<BenefitsBlockProps> = ({}) => {
    return (
        <>
          <section id="benefits_first">
            <div className="_container">
              <div className="benefits__container">
                <div className="benefits">
                  <h2 className="benefits__title title">Instructional Design</h2>
                  <BenefitsContent number={1} data={firstBenefitsBlock}/>
                </div>
              </div>
            </div>
          </section>
          <section id="benefits_second">
            <div className="_container">
              <div className="benefits__container">
                <div className="benefits">
                  <BenefitsContent number={2} data={secondBenefitsBlock}/>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}

export default BenefitsBlock;