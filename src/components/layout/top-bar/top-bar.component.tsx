import Button from "../../button/button.component";
import TextIcon from "../../text-icon/text-icon.component";

import styles from "./top-bar.module.scss";
const TopBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.contactData}>
            <TextIcon
              text='293939098'
              src='./icons/phone.png'
              alt='phone-icon'
            />
            <TextIcon
              text='kontakt@aurorabox.pl'
              src='./icons/mail.png'
              alt='mail-icon'
            />
          </div>
          <div>
            <Button>
              <TextIcon
                text='Zaloguj się'
                src='./icons/login.png'
                alt='login-icon'
              />
            </Button>
            <Button>
              <TextIcon
                text='Załóż konto'
                src='./icons/new-user.png'
                alt='new user-icon'
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
