import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <img
                        src="https://cdn.pixabay.com/photo/2023/06/19/11/50/ai-generated-8074916_960_720.jpg"
                        alt="Profile"
                        className="profile-avatar"
                    />
                    <h2>Doresa Hasani</h2>
                    <span className="premium">Premium User</span>

                    <div className="action-buttons">
                        <button className="green-btn">Add Pictures</button>
                    </div>
                </div>

                <div className="profile-content">
                    <h3>Bio & Other details</h3>

                    <div className="profile-grid">
                        <div>
                            <p><strong>My Role:</strong> Beatmaker</p>
                            <p><strong>My Favorite Artist:</strong> Nino, Travis Scott, Metro Boomin</p>
                            <p><strong>My Favorite Music Genre:</strong> Trap</p>
                        </div>
                        <div>
                            <p><strong>My Experience Level:</strong> Intermediate</p>
                            <p><strong>The Software or Equipment I Use:</strong> Ableton</p>
                            <p><strong>My Preferred Artist to Model After:</strong> Metroboomin</p>
                        </div>
                        <div>
                            <p><strong>My City of Origin:</strong> California, USA</p>
                            <p><strong>Top 3 Collaborations:</strong> #Drill, Metroboomin, Rap</p>
                        </div>
                    </div>
                </div>

                <div className="status">
                    <span className="online-dot"></span> Online
                </div>
            </div>
        </div>
    );
};

export default Profile;
