import { forwardRef, type InputHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Input.module.css";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input ref={ref} className={clsx(styles.input, className)} {...props} />
    );
  },
);

Input.displayName = "Input";

export default Input;
