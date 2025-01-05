// src/components/ProfileForm.js
import React, { useState } from "react";

function ProfileForm({ profile, onUpdateProfile }) {
  const [formData, setFormData] = useState(profile);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(formData);
  };

  const handleFileUpload = (e) =>
    setFormData({ ...formData, profilePic: URL.createObjectURL(e.target.files[0]) });

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Profile</h2>
      <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
      <input name="standard" value={formData.standard} onChange={handleInputChange} placeholder="Standard" />
      <input name="dob" type="date" value={formData.dob} onChange={handleInputChange} />
      <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" required />
      <input type="file" onChange={handleFileUpload} />
      <button type="submit">Save</button>
    </form>
  );
}

export default ProfileForm;

