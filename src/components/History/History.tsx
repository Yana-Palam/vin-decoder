import styles from "./History.module.css";

interface HistoryProps {
  items: string[];
  onSelect: (vin: string) => void;
}

const History = ({ items, onSelect }: HistoryProps) => {
  if (!items.length) {
    return <p>No recent searches yet.</p>;
  }

  return (
    <ul className={styles.list}>
      {items.map((vin) => (
        <li key={vin}>
          <button
            type="button"
            className={styles.button}
            onClick={() => onSelect(vin)}
          >
            {vin}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default History;
