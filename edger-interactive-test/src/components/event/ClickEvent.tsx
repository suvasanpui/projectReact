import React, { useState } from "react";

const ClickEvent: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="p-4">
            <p>Count: {count}</p>
            <button
                onClick={handleClick}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Increment Count
            </button>
        </div>
    );
};

export default ClickEvent;
