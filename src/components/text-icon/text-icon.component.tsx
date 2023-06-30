import styles from "./text-icon.module.scss";

type Props = {
  text: string;
  src: string;
  alt: string;
};

const ButtonTextIcon = ({ text, src, alt }: Props) => {
  return (
    <button className={styles.btn}>
      <img src={src} alt={alt} />
      <span>{text}</span>
    </button>
  );
};

export default ButtonTextIcon;
