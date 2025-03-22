import React from "react";
import { useLocation } from "react-router-dom";

const About: React.FC = () => {
    const location = useLocation();

    return (
        <div className="p-4">
            <h2 className="text-xl">About Page</h2>
            <p>Current Path: {location.pathname}</p>
        </div>
    );
};

export default About;
