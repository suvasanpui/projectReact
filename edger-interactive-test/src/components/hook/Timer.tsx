//useEffect()
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup
    }, []);

    return (
        <div className="p-4 border rounded-xl shadow-lg m-2">
            <h2 className="text-xl font-bold">useEffect Hook</h2>
            <p>Seconds: {seconds}</p>
        </div>
    );
};

export default Timer;
