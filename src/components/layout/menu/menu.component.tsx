import classnames from "classnames";
import { useState } from "react";

import styles from "./menu.module.scss";

const navLinks = [
  { name: "Kategorie", id: 1, path: "/" },
  { name: "Nowości", id: 2, path: "/" },
  { name: "Promocje", id: 3, path: "/" },
  { name: "Wyprzedaże", id: 4, path: "/" },
  { name: "Kolekcje sezony", id: 5, path: "/" },
  { name: "Nasza oferta", id: 6, path: "/" },
  { name: "Trendy 2018", id: 7, path: "/" },
  { name: "Blog", id: 8, path: "/" },
];

type Props = {
  isDesktop: boolean;
  onCloseSideMenu?: () => void;
};

const Menu = ({ isDesktop, onCloseSideMenu }: Props) => {
  const [activeLinkId, setActiveLinkId] = useState<number>(4);

  return (
    <nav>
      <ul
        className={classnames(
          { [styles.mobileView]: !isDesktop },
          {
            [styles.desktopView]: isDesktop,
          }
        )}>
        {navLinks.map(link => (
          <li
            key={link.id}
            onClick={() => {
              onCloseSideMenu && onCloseSideMenu();
              setActiveLinkId(link.id);
            }}>
            <a
              className={classnames(styles.link, {
                [styles.active]: activeLinkId === link.id,
              })}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
