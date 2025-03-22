//useState()
import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);

    return (
        <div className="p-4 border rounded-xl shadow-lg m-2">
            <h2 className="text-xl font-bold">useState Hook</h2>
            <p>Count: {count}</p>
            <button onClick={handleIncrement} className="m-1 px-2 py-1 bg-blue-500 text-white rounded">Increment</button>
            <button onClick={handleDecrement} className="m-1 px-2 py-1 bg-red-500 text-white rounded">Decrement</button>
        </div>
    );
};

export default Counter;
