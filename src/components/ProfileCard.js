// src/components/ProfileCard.js
import React from "react";

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <img
        src={profile.profilePic || "default-avatar.png"}
        alt="Profile"
        className="profile-img"
      />
      <h3>{profile.name}</h3>
      <p>Email: {profile.email}</p>
      <p>Standard: {profile.standard}</p>
      <p>DOB: {profile.dob}</p>
      <p>Phone: {profile.phone}</p>
    </div>
  );
}

export default ProfileCard;

