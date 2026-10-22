import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import styles from "./Products.module.css";
export default function Products() {
  const [products, setProducts] = useState([]); const [cartCount, setCartCount] = useState(0); const [message, setMessage] = useState(""); const [loading, setLoading] = useState(true); const [error, setError] = useState("");
  useEffect(() => { fetch("/products.json").then((response) => { if (!response.ok) throw new Error("Could not load products"); return response.json(); }).then(setProducts).catch(() => setError("Products could not be loaded. Check public/products.json and try again.")).finally(() => setLoading(false)); }, []);
  function addToCart(product, quantity) { setCartCount((current) => current + quantity); setMessage(`${quantity} × ${product.name} added to your demo cart.`); }
  return <section className={`container ${styles.page}`}><div className={styles.pageHeading}><div><p className="eyebrow">TASK 01 + TASK 02 / COMPONENTS, PROPS & STATE</p><h1>Product <em>store.</em></h1><p className={styles.intro}>Each card receives product data through props. Use the quantity controls to see state in action.</p></div><div className={styles.cart} aria-live="polite"><span className={styles.cartLabel}>ITEMS IN CART</span><strong>{cartCount}</strong></div></div>
  {message && <div className={styles.message} role="status"><span>{message}</span><button type="button" onClick={() => setMessage("")} aria-label="Dismiss message">×</button></div>}
  {loading ? <p className={styles.status}>Loading products…</p> : error ? <p className={styles.error}>{error}</p> : <div className={styles.grid}>{products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={addToCart} />)}</div>}</section>;
}
