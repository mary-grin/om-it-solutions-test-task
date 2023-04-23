import {FC} from "react";

import "./DesignLearnBlock.scss"

interface DesignLearnBlockProps {

}

const DesignLearnBlock: FC<DesignLearnBlockProps> = ({}) => {
    return (
        <section id="design-learn">
          <div className="design-learn">
            <div className="_container">
              <div className="design-learn__content">
                <div className="design-learn__info">
                  <h1 className="design-learn__title">We Design Learning.</h1>
                  <p className="design-learn__text">What We Can Do For You?</p>
                  <button className="design-learn__btn">Know more</button>
                </div>
                <img className="design-learn__image" src="/img/know-more_man.png"/>
              </div>
              <div className="design-learn__line"></div>
            </div>
          </div>
        </section>
    )
}

export default DesignLearnBlock;