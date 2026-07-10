import { LoaderCircle } from "lucide-react";

import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoaderCircle size={36} className={styles.icon} />
    </div>
  );
};

export default Loader;
