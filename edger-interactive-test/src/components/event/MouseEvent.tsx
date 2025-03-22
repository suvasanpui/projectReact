import React, { useState } from "react";

const MouseEvent: React.FC = () => {
    const [bgColor, setBgColor] = useState<string>("bg-gray-300");

    const handleMouseEnter = () => {
        setBgColor("bg-green-300");
    };

    const handleMouseLeave = () => {
        setBgColor("bg-gray-300");
    };

    return (
        <div
            className={`${bgColor} p-8 rounded`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p>Hover over this box to change the color.</p>
        </div>
    );
};

export default MouseEvent;
