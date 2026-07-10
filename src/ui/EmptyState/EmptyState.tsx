import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  message: string;
}

const EmptyState = ({ message }: EmptyStateProps) => {
  return <p className={styles.empty}>{message}</p>;
};

export default EmptyState;
