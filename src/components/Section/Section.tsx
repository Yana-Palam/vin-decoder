import type { ReactNode } from "react";
import Card from "../../ui/Card/Card";
import styles from "./Section.module.css";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <Card>
      <section>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.content}>{children}</div>
      </section>
    </Card>
  );
};

export default Section;
