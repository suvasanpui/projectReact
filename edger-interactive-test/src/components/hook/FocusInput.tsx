//useRef
import React, { useRef } from 'react';

const FocusInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="p-4 border rounded-xl shadow-lg m-2">
            <h2 className="text-xl font-bold">useRef Hook</h2>
            <input
                ref={inputRef}
                type="text"
                placeholder="Focus me!"
                className="p-2 border rounded"
            />
            <button onClick={handleFocus} className="m-2 px-2 py-1 bg-green-500 text-white rounded">Focus</button>
        </div>
    );
};

export default FocusInput;
