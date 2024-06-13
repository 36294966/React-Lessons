import React from 'react';
import { useSelector } from 'react-redux';
import './Page.css';

const Profile = () => {
    const backgroundColor = useSelector((state) => state.background.backgroundColor);

    return (
        <div className="page" style={{ backgroundColor }}>
            <div className="content-box">
                <h1>Profile Page</h1>
                <p>The current background color is {backgroundColor}.</p>
            </div>
        </div>
    );
};

export default Profile;
