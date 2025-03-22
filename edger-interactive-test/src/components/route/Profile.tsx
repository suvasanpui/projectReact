import React from "react";
import { useParams } from "react-router-dom";

const Profile: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="p-4">
            <h2 className="text-xl">Profile Page</h2>
            <p>User ID: {id}</p>
        </div>
    );
};

export default Profile;
