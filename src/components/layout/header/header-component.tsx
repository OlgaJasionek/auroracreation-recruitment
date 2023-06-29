import styles from "./header-component.module.scss";

const HeaderComponent = () => {
  return (
    <div className='container'>
      <header className={styles.wrapper}>
        <div className={styles.content}>
          <img src='./icons/logo.png' alt='logo' />
          <div>
            <div className={styles.search}>
              <input type='text' placeholder='Co chcesz kupić?' />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
