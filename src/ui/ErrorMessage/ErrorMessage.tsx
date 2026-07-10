import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({
  message = "Something went wrong.",
}: ErrorMessageProps) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;
