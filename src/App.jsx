import { Route,  Routes } from 'react-router'
import './App.css'
import MainFile from './components/mainPages/MainFile'
import CartPage from './components/extraPages/CartPage'
import ProductList from './components/extraPages/ProductList'
import Header from "./components/mainPages/Header";

function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<MainFile />} />
        {/* <Route path='/mainfile' element={<MainFile/>}/> */}
        <Route path="/product" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App
