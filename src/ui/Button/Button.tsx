import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...props }: Props) => {
  return <button className={clsx(styles.button, className)} {...props} />;
};

export default Button;
