import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./index.css";
import HomePage from "./pages";
import DetailPage from "./pages/detail";
import CheckoutPage from "./pages/checkout";
import { CartProvider } from "./context/cart-context";
import Footer from "./components/footer";
import Profile from "./pages/profile";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import AdminController from "./components/admin-controller";
import Header from "./components/header";
import ToastProvider from "./context/toaster-context/toast-provider";
import AuthProvider from "./context/auth-contex/auth-provider";
import LoginPage from "./pages/login";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
            <Routes>
              <Route path="/" element={<div className="p-4 max-w-280 mx-auto">
                <Header /><Outlet /></div>}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/detail" element={<DetailPage />} />
              </Route>
              <Route path="customers" element={<div className="p-4 max-w-280 mx-auto"><Header /><Outlet /></div>}>
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              <Route path="admins" element={<AdminController />}>
                <Route index element={<Dashboard />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
            <Footer />
            
        </CartProvider>
      </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
);
