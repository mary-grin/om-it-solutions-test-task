import { FC } from "react";

import "./Footer.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="_container">
          <div className="footer__content">
          <div className="footer__logo">
            <img src="/img/logo-footer.png" />
            <p className="footer__logo-text">
              Taking learning to the next level
            </p>
          </div>
          <ul className="footer__list list">
            <li className="list__item">
              <a className="list__link">Home eLearning</a>
            </li>
            <li className="list__item">
              <a className="list__link">Price Quote Services</a>
            </li>
            <li className="list__item">
              <a className="list__link">Instructional Design</a>
            </li>
          </ul>
          <ul className="footer__list list">
            <li className="list__item">
              <a className="list__link">eLearning Development</a>
            </li>
            <li className="list__item">
              <a className="list__link">Mobile Learning</a>
            </li>
            <li className="list__item">
              <a className="list__link">Product Training</a>
            </li>
          </ul>
          <ul className="footer__list list">
            <li className="list__item">
              <a className="list__link">Custom eLearning</a>
            </li>
            <li className="list__item">
              <a className="list__link">eLearning for Retail</a>
            </li>
            <li className="list__item">
              <a className="list__link">eLearning Packages</a>
            </li>
            <li className="list__item">
              <a className="list__link">Contact</a>
            </li>
          </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="_container">
          Copyright © 2016 eLearning Company
        </div>
      </div>
    </footer>
  );
};

export default Footer;
