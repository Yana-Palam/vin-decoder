import { Link } from "react-router-dom";
import type { VehicleVariable } from "../../types/api";

import styles from "./VariableList.module.css";
import HtmlContent from "../../ui/HtmlContent";

interface VariableListProps {
  items: VehicleVariable[];
}

const VariableList = ({ items }: VariableListProps) => {
  return (
    <ul className={styles.list}>
      {items.map(({ ID, Name, Description }) => (
        <li key={ID} className={styles.item}>
          <Link to={`/variables/${ID}`} className={styles.link}>
            <h3>{Name}</h3>

            <HtmlContent content={Description} className={styles.description} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default VariableList;
