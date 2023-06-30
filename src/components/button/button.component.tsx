import styles from "./button.module.scss";

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
