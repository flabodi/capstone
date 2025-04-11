import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Mynavbar";
import Home from "./components/Home";
import TipsSection from "./components/TipsSection";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import TipsPage from "./components/TipsPage";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Router>
      <MyNavbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/product" element={<Products />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/prodotto/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
