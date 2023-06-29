import styles from "./counter.module.scss";

type Props = {
  quantity: number;
};

const Counter = ({ quantity }: Props) => {
  return <div className={styles.counter}>{quantity}</div>;
};

export default Counter;
