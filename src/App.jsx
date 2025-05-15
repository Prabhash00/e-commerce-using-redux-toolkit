import { Route, Routes } from "react-router";
import "./App.css";
import MainFile from "./components/mainPages/MainFile";
import CartPage from "./components/extraPages/CartPage";
import ProductView from "./components/extraPages/ProductView";
import Header from "./components/mainPages/Header";
import Footer from "./components/mainPages/Footer";
import ProductCategories from "./components/extraPages/ProductCategories";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainFile />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/prod-cate" element={<ProductCategories/>}/>
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
