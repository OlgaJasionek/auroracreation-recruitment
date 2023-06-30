import classnames from "classnames";
import { useEffect, useState } from "react";

import { lockScroll } from "../../../helpers/lockscroll";
import IconButton from "../../icon-button/icon-button.component";
import SearchBar from "../../search-bar/search-bar.component";

import styles from "./side-menu.module.scss";
import TextIcon from "../../text-icon/text-icon.component";
import Button from "../../button/button.component";

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
  isOpen: boolean;
  onCloseSideMenu: () => void;
};

const SideMenu = ({ isOpen, onCloseSideMenu }: Props) => {
  const [activeLinkId, setActiveLinkId] = useState<number>(4);

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
          onClick={onCloseSideMenu}
          src='/icons/close.png'
          alt='close-icon'></IconButton>
      </div>
      <SearchBar />
      <div className={styles.userBtnGroup}>
        <Button>
          <TextIcon
            text='Zaloguj się'
            src='/icons/login.png'
            alt='login-icon'
          />
        </Button>
        <Button>
          <TextIcon
            text='Załóż konto'
            src='/icons/new-user.png'
            alt='new-user-icon'
          />
        </Button>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navLinks.map(link => (
            <li
              key={link.id}
              onClick={() => {
                onCloseSideMenu();
                setActiveLinkId(link.id);
              }}>
              <a
                href={link.path}
                className={classnames(styles.link, {
                  [styles.active]: activeLinkId === link.id,
                })}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.contactData}>
        <TextIcon text='293939098' src='/icons/phone.png' alt='phone-icon' />
        <TextIcon
          text='kontakt@aurorabox.pl'
          src='/icons/mail.png'
          alt='mail-icon'
        />
      </div>
    </div>
  );
};

export default SideMenu;
