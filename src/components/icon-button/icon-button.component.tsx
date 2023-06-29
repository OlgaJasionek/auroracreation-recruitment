import styles from "./icon-button.module.scss";

type Props = {
  onClick: () => void;
  src: string;
  alt: string;
};

const IconButton = ({ onClick, src, alt }: Props) => {
  return (
    <button className={styles.iconBtn} onClick={onClick}>
      <img className={styles.icon} src={src} alt={alt} />
    </button>
  );
};
export default IconButton;
