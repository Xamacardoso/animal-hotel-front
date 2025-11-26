import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
}

export function Button({ text, onClick, variant = "primary" }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
}
