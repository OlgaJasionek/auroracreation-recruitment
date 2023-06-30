import styles from "./text-icon.module.scss";

type Props = {
  text: string;
  src: string;
  alt: string;
};

const TextIcon = ({ text, src, alt }: Props) => {
  return (
    <div className={styles.content}>
      <img src={src} alt={alt} />
      <span>{text}</span>
    </div>
  );
};

export default TextIcon;
