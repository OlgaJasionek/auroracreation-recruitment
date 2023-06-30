import Counter from "../../counter/counter.component";
import IconButton from "../../icon-button/icon-button.component";
import SearchBar from "../../search-bar/search-bar.component";

import styles from "./header.module.scss";

type Props = {
  onOpenSideMenu: () => void;
};

const HeaderComponent = ({ onOpenSideMenu }: Props) => {
  return (
    <div className='container'>
      <header className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <div className={styles.mobileMenu}>
              <IconButton
                onClick={onOpenSideMenu}
                src='/icons/menu.png'
                alt='menu-icon'></IconButton>
            </div>
            <img src='./icons/logo.png' alt='logo' />
          </div>
          <div className={styles.userPanel}>
            <div className={styles.searchDesktop}>
              <SearchBar />
            </div>
            <div className={styles.basket}>
              <IconButton
                src='/icons/basket.png'
                alt='basket-icon'
                onClick={() => {}}></IconButton>
              <Counter quantity={2} />
            </div>
            <div className={styles.basketText}>
              <span>Twój koszyk</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
