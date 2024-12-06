import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Carousal from '../components/Carousal';
import Cards from '../components/Cards';
import FeatureSection from '../components/FeatureSection';
import CTASection from '../components/CTASection';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Get the user from Redux state
    const user = useSelector((state) => state.auth?.user);

    const [searchQuery, setSearchQuery] = useState("");

    // Handle search bar click
    const handleSearch = () => {
        if (!user) {
            // If the user is not logged in, redirect to the login page
            navigate("/login");
        } else {
            // If logged in, you can proceed with the search or navigate to ViewOrder
            navigate("/view-order");  
        }
    };

    return (
        <div>
            {/* Carousal Section */}
            <Carousal />
            
            {/* Cards Section */}
            <Cards />
            
            {/* Feature Section */}
            <FeatureSection />
            
            {/* CTA Section */}
            <CTASection />

            {/* Search Bar */}
            <div>
                <input
                    type="text"
                    placeholder="Search for a food item"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onClick={handleSearch} // Trigger login redirect if not logged in
                    style={{
                        padding: "10px",
                        width: "300px",
                        marginBottom: "20px",
                    }}
                />
            </div>
        </div>
    );
};

export default Home;
