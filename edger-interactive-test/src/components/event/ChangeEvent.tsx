import React, { useState } from "react";

const ChangeEvent: React.FC = () => {
    const [text, setText] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <div className="p-4">
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type something..."
                className="border p-2 rounded"
            />
            <p>You typed: {text}</p>
        </div>
    );
};

export default ChangeEvent;
