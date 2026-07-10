import type { DecodeVinItem } from "../../types/api";
import styles from "./DecodeResult.module.css";

interface DecodeResultProps {
  items: DecodeVinItem[];
}

const DecodeResult = ({ items }: DecodeResultProps) => {
  if (!items.length) {
    return <p>Enter a VIN number to see decoded vehicle information.</p>;
  }

  return (
    <dl className={styles.list}>
      {items.map(({ Variable, Value, VariableId }) => (
        <div key={VariableId} className={styles.item}>
          <dt className={styles.variable}>{Variable}</dt>
          <dd className={styles.value}>{Value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default DecodeResult;
