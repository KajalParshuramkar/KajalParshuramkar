import React from "react";

const ProfileCard = ({ profile, onSummary }) => (
  <div className="profile-card">
    <img src={profile.photo} alt={profile.name} />
    <h3>{profile.name}</h3>
    <p>{profile.description}</p>
    <button onClick={() => onSummary(profile)}>Summary</button>
  </div>
);

export default ProfileCard;