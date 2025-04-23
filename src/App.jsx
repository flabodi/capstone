import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MyNavbar from "./components/Mynavbar";
import Home from "./components/Home";
import TipsSection from "./components/TipsSection";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import TipsPage from "./components/TipsPage";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import ThankYouPage from "./components/ThankYouPage";

// Componente wrapper per AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/product" element={<Products />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/prodotto/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <MyNavbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;