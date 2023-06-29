import classnames from "classnames";
import { useEffect } from "react";
import { lockScroll } from "../../../helpers/lockscroll";
import IconButton from "../../icon-button/icon-button.component";

import styles from "./side-menu.module.scss";

const navLinks = [
  { name: "Home", id: 2, path: "/" },
  { name: "Portfolio", id: 1, path: "/portfolio" },
  { name: "O mnie", id: 4, path: "/o-mnie" },
  // { name: "Oferta", id: 5, path: "/offer" },//TODO: PAGE IN PROGRESS
  { name: "Kontakt", id: 3, path: "/kontakt" },
];

type Props = {
  isOpen: boolean;
  onCloseSideMenu: () => void;
};

const SideMenu = ({ isOpen, onCloseSideMenu }: Props) => {
  useEffect(() => {
    lockScroll(isOpen);
  }, [isOpen]);

  return (
    <div
      className={classnames(styles.wrapper, {
        [styles["wrapper--visible"]]: isOpen,
      })}>
      <div className={styles.btn}>
        <IconButton
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          src='/icons/close.png'
          alt='close-icon'></IconButton>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navLinks.map(link => (
            <li key={link.id} onClick={onCloseSideMenu}>
              <link className={classnames(styles.linkUnderlink)}>
                {link.name}
              </link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
