import { FC } from "react";

import "./NavbarLink.scss";

interface NavbarLinkProps {
  title: string;
  href?: string;
  onClick: () => void;
}

const NavbarLink: FC<NavbarLinkProps> = ({ title, href, onClick }) => {
  return (
    <li className="menu__item">
      <a href={href || "#"} className="menu__link" onClick={onClick}>
        {title}
      </a>
    </li>
  );
};

export default NavbarLink;
