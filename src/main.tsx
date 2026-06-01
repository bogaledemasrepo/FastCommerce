import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import HomePage from "./pages";
import Header from "./components/header";
import DetailPage from "./pages/detail";
import CheckoutPage from "./pages/checkout";
import { CartProvider } from "./context/cart-context";
import Footer from "./components/footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <div className="p-4 max-w-280 mx-auto">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
