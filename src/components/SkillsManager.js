// src/components/SkillsManager.js
import React, { useState } from "react";

function SkillsManager({ skills, onAddSkill, onUpdateSkill, onDeleteSkills }) {
  const [skillName, setSkillName] = useState("");
  const [proficiency, setProficiency] = useState("Beginner");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleAddSkill = (e) => {
    e.preventDefault();
    onAddSkill({ id: Date.now(), name: skillName, proficiency });
    setSkillName("");
    setProficiency("Beginner");
  };

  const toggleSelectSkill = (id) => {
    setSelectedSkills((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    onDeleteSkills(selectedSkills);
    setSelectedSkills([]);
  };

  return (
    <div>
      <h2>Skills</h2>
      <form onSubmit={handleAddSkill}>
        <input
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          placeholder="Skill Name"
          required
        />
        <select value={proficiency} onChange={(e) => setProficiency(e.target.value)}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
        <button type="submit">Add Skill</button>
      </form>

      <div>
        <button onClick={handleDeleteSelected} disabled={selectedSkills.length === 0}>
          Delete Selected
        </button>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              <input
                type="checkbox"
                checked={selectedSkills.includes(skill.id)}
                onChange={() => toggleSelectSkill(skill.id)}
              />
              {skill.name} ({skill.proficiency})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsManager;

