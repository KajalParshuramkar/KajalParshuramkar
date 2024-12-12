import React, { useState } from "react";
import ProfileCard from "./ProfileCard";

const ProfileList = ({ profiles, setSelectedProfile }) => {
  const [search, setSearch] = useState("");

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search profiles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="profile-list">
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSummary={setSelectedProfile}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;