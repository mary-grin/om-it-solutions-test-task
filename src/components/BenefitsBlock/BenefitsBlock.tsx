import BenefitsContent from "@/components/BenefitsContent/BenefitsContent";
import { firstBenefitsBlock, secondBenefitsBlock } from "@/data/BenefitsData";

import "./BenefitsBlock.scss";

const BenefitsBlock = () => {
  return (
    <>
      <section id="benefits_first">
        <div className="_container">
          <div className="benefits__container half-border half-border-left">
            <div className="benefits">
              <h2 className="benefits__title title">Instructional Design</h2>
              <BenefitsContent number={1} data={firstBenefitsBlock} />
            </div>
          </div>
        </div>
      </section>
      <section id="benefits_second">
        <div className="_container">
          <div className="benefits__container half-border half-border-right half-border-end">
            <div className="benefits">
              <BenefitsContent number={2} data={secondBenefitsBlock} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsBlock;
