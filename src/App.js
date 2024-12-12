import React, { useState } from "react";
import profilesData from "./data/Profiles.js";
import ProfileList from "./components/ProfileList.js";
import ProfileDetails from "./components/ProfileDetails.js";
import { AdminPanel } from './components/AdminPanel'; // Use curly braces for named exports
import MapContainerComponent from "./components/MapContainerComponent.js"; // Correct path
import './styles.css';



const App = () => {
  const [profiles, setProfiles] = useState(profilesData);
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div>
      {!selectedProfile ? (
        <>
          <AdminPanel profiles={profiles} setProfiles={setProfiles} />
          <ProfileList profiles={profiles} setSelectedProfile={setSelectedProfile} />
        </>
      ) : (
        <ProfileDetails
          profile={selectedProfile}
          goBack={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
};

export default App;