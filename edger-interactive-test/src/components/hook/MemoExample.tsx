//memo Example
import React, { useState, useMemo } from 'react';

const expensiveCalculation = (num: number): number => {
    console.log('Calculating...');
    return num * 2;
};

const MemoExample: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <div className="p-4 border rounded-xl shadow-lg m-2">
            <h2 className="text-xl font-bold">useMemo Hook</h2>
            <p>Memoized Value: {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)} className="m-1 px-2 py-1 bg-purple-500 text-white rounded">Increment</button>
        </div>
    );
};

export default MemoExample;
