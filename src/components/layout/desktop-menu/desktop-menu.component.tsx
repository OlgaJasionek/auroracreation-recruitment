import classNames from "classnames";
import Menu from "../menu/menu.component";

import styles from "./desktop-menu.module.scss";

const DesctopMenu = () => {
  return (
    <div className={classNames("container", styles.content)}>
      <Menu isDesktop={true} />
    </div>
  );
};

export default DesctopMenu;
