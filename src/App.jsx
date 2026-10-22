import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Todo from "./pages/Todo.jsx";
import NotFound from "./pages/NotFound.jsx";
import styles from "./App.module.css";

export default function App() {
  return <div className={styles.app}><Header /><main className={styles.main}><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/todo" element={<Todo />} />
    <Route path="*" element={<NotFound />} />
  </Routes></main><Footer /></div>;
}
