import React, { useState } from "react";

const KeyPressEvent: React.FC = () => {
    const [key, setKey] = useState<string>("");

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setKey(e.key);
    };

    return (
        <div className="p-4">
            <input
                type="text"
                onKeyPress={handleKeyPress}
                placeholder="Press any key..."
                className="border p-2 rounded"
            />
            <p>Key Pressed: {key}</p>
        </div>
    );
};

export default KeyPressEvent;
