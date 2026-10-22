import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
export default function NotFound() { return <section className={`container ${styles.page}`}><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>Looks like a<br /><em>wrong turn.</em></h1><p>The page you are looking for doesn't exist.</p><Link to="/" className={styles.link}>Return home ↗</Link></section>; }
