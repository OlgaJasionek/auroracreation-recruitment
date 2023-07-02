import classnames from "classnames";
import { useEffect, useState } from "react";

import { lockScroll } from "../../../helpers/lockscroll";
import IconButton from "../../icon-button/icon-button.component";
import SearchBar from "../../search-bar/search-bar.component";

import styles from "./side-menu.module.scss";
import TextIcon from "../../text-icon/text-icon.component";
import Button from "../../button/button.component";
import Menu from "../menu/menu.component";

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
      <Menu isDesktop={false} onCloseSideMenu={onCloseSideMenu} />
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
