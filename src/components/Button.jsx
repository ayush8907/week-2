import styles from "./Button.module.css";
export default function Button({ children, variant = "primary", type = "button", onClick, disabled = false, className = "" }) {
  return <button className={`${styles.button} ${styles[variant] || styles.primary} ${className}`} type={type} onClick={onClick} disabled={disabled}>{children}</button>;
}
