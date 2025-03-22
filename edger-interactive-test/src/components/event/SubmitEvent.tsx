import React, { useState } from "react";

const SubmitEvent: React.FC = () => {
    const [message, setMessage] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("Form submitted successfully!");
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    className="border p-2 rounded mr-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Submit
                </button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default SubmitEvent;
