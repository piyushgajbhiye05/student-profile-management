// src/components/ProfileManager.js
import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import SkillsManager from "./SkillsManager";
import ProfileCard from "./ProfileCard";

function ProfileManager() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    standard: "",
    dob: "",
    phone: "",
    profilePic: null,
  });

  const [skills, setSkills] = useState([]);

  // Save profile details
  const updateProfile = (newProfile) => setProfile(newProfile);

  // Skill CRUD operations
  const addSkill = (skill) => setSkills([...skills, skill]);
  const updateSkill = (updatedSkill) =>
    setSkills(skills.map((s) => (s.id === updatedSkill.id ? updatedSkill : s)));
  const deleteSkills = (ids) =>
    setSkills(skills.filter((s) => !ids.includes(s.id)));

  return (
    <div>
      <ProfileForm profile={profile} onUpdateProfile={updateProfile} />
      <ProfileCard profile={profile} />
      <SkillsManager
        skills={skills}
        onAddSkill={addSkill}
        onUpdateSkill={updateSkill}
        onDeleteSkills={deleteSkills}
      />
    </div>
  );
}

export default ProfileManager;


