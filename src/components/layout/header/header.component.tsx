import Counter from "../../counter/counter.component";
import IconButton from "../../icon-button/icon-button.component";

import styles from "./header.module.scss";

type Props = {
  onOpenSideMenu: () => void;
};

const HeaderComponent = ({ onOpenSideMenu }: Props) => {
  return (
    <div className='container'>
      <header className={styles.wrapper}>
        <div className={styles.content}>
          <IconButton
            onClick={onOpenSideMenu}
            src='/icons/menu.png'
            alt='menu-icon'></IconButton>
          <img src='./icons/logo.png' alt='logo' />
          <div className={styles.userPanel}>
            <div className={styles.search}>
              <input
                className={styles.input}
                type='text'
                placeholder='Co chcesz kupić?'
              />
              <img src='/icons/search.png' alt='search-icon' />
            </div>
            <div className={styles.basket}>
              <img src='/icons/basket.png' alt='basket-icon' />
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
