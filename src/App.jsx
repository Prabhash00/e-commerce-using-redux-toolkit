import { Route, Routes } from "react-router";
import "./App.css";
import MainFile from "./components/mainPages/MainFile";
import CartPage from "./components/mainPages/extraPages/CartPage";
import ProductView from "./components/mainPages/extraPages/ProductView";
import Header from "./components/mainPages/Header";
import Footer from "./components/mainPages/Footer";
import ScrollToTop from "./components/mainPages/ScrollToTop";
import ProductCategories from "./components/mainPages/extraPages/ProductCategories";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header count={count} />
      <ScrollToTop />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Routes>
          <Route
            path="/"
            element={<MainFile count={count} setCount={setCount} />}
          />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/prod-cate" element={<ProductCategories />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
