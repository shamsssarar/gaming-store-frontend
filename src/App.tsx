import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

function AppContent() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className={`flex-grow ${!isHome ? "pt-24" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

// 4. Wrap everything in the Router
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
