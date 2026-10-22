import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
const links = [{ to: "/", label: "Home", end: true }, { to: "/products", label: "Products" }, { to: "/todo", label: "To-Do App" }];
export default function Header() {
  return <header className={styles.header}><div className={`container ${styles.inner}`}><NavLink to="/" className={styles.brand}><span className={styles.brandMark}>W2</span><span>React Fundamentals<span className={styles.period}>.</span></span></NavLink><nav className={styles.nav} aria-label="Main navigation">{links.map((link) => <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}>{link.label}</NavLink>)}</nav></div></header>;
}
