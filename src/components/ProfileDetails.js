import React from "react";
import MapComponent from "./MapComponent";

const ProfileDetails = ({ profile, goBack }) => (
  <div>
    <button onClick={goBack}>Back</button>
    <h2>{profile.name}'s Location</h2>
    <p>{profile.description}</p>
    <MapComponent profile={profile} />
  </div>
);

export default ProfileDetails;
