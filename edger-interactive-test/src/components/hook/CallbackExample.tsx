//useCallback()
import React, { useState, useCallback } from 'react';

type ButtonProps = {
    onClick: () => void;
};

const ChildButton: React.FC<ButtonProps> = React.memo(({ onClick }) => {
    console.log('Child button rendered');
    return (
        <button onClick={onClick} className="m-1 px-2 py-1 bg-yellow-500 text-white rounded">
            Click Me
        </button>
    );
});

const CallbackExample: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleClick = useCallback(() => {
        console.log('Button clicked');
    }, []);

    return (
        <div className="p-4 border rounded-xl shadow-lg m-2">
            <h2 className="text-xl font-bold">useCallback Hook</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} className="m-1 px-2 py-1 bg-teal-500 text-white rounded">Increment</button>
            <ChildButton onClick={handleClick} />
        </div>
    );
};

export default CallbackExample;
