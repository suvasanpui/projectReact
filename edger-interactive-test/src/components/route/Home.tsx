import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    const goToProfile = useCallback(() => {
        navigate("/profile/124");
    }, [navigate]);

    return (
        <div className="p-4">
            <h2 className="text-xl">Home Page</h2>
            <button 
                onClick={goToProfile} 
                className="bg-blue-500 text-white p-2 rounded"
            >
                Go to Profile
            </button>
        </div>
    );
};

export default Home;
