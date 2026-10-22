import { useState } from "react";
import Button from "./Button.jsx";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  return <article className={styles.card}>
    <div className={styles.imageWrap}><img src={product.image} alt={product.name} className={styles.image} loading="lazy" /><span className={styles.tag}>{product.tag}</span></div>
    <div className={styles.content}><div className={styles.category}>{product.category}</div><h2 className={styles.title}>{product.name}</h2><p className={styles.description}>{product.description}</p>
      <div className={styles.buyRow}><strong className={styles.price}>₹{product.price.toLocaleString("en-IN")}</strong><div className={styles.quantity} aria-label={`Quantity for ${product.name}`}><button type="button" onClick={() => setQuantity((n) => Math.max(1, n - 1))} aria-label="Decrease quantity">−</button><span aria-live="polite">{quantity}</span><button type="button" onClick={() => setQuantity((n) => n + 1)} aria-label="Increase quantity">+</button></div></div>
      <Button onClick={() => onAddToCart(product, quantity)} className={styles.addButton}>Add to cart <span aria-hidden="true">↗</span></Button>
    </div></article>;
}
