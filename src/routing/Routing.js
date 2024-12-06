import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PageNotFound from "../pages/PageNotFound";

// Lazy load components
const Home = React.lazy(() => import("../pages/Home"));
const AboutPage = React.lazy(() => import("../pages/About"));
const ContactPage = React.lazy(() => import("../pages/ContactPage"));
const Service = React.lazy(() => import("../pages/Service"));
const Login = React.lazy(() => import("../components/features/view/Login"));
const RegistrationPage = React.lazy(() =>
    import("../components/features/view/Registration")
);
const DashboardPage = React.lazy(() =>
    import("../components/features/view/Dashboard")
);
const ViewOrder = React.lazy(() =>
    import("../components/features/view/ViewOrder")
);
const CartPage = React.lazy(() =>
    import("../components/features/view/CartPage")
);
const ViewDetails = React.lazy(() =>
    import("../components/features/view/ViewDetails")
);

// Food GIF Loader
const Loader = () => (
    <div style={{ textAlign: "center", padding: "50px" }}>
        <img
            src="https://media.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif"
            alt="Loading..."
            style={{ width: "200px", height: "200px" }}
        />
    </div>
);

const App = () => {
    const [cart, setCart] = useState([]);

    return (
        <Router>
            <Header />
            <Suspense fallback={<Loader />}>
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
            </Suspense>
            <Footer />
        </Router>
    );
};

export default App;
