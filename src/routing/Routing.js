import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../pages/Home";
import AboutPage from "../pages/About";
import ContactPage from "../pages/ContactPage";
import Service from "../pages/Service";
import Login from "../components/features/view/Login";
import RegistrationPage from "../components/features/view/Registration";
import DashboardPage from "../components/features/view/Dashboard";
import ViewOrder from "../components/features/view/ViewOrder";
import CartPage from "../components/features/view/CartPage";
import ViewDetails from "../components/features/view/ViewDetails";
import PageNotFound from "../pages/PageNotFound";

const App = () => {
    const [cart, setCart] = useState([]);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/service" element={<Service />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<RegistrationPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route
                    path="/orders"
                    element={<ViewOrder cart={cart} setCart={setCart} />}
                />
                <Route
                    path="/cart"
                    element={<CartPage cart={cart} setCart={setCart} />}
                />
                <Route path="/view-details/:id" element={<ViewDetails />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
