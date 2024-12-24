// src/components/Skills.js
import React from 'react';

const skills = [
  { name: "C++" },
  { name: "HTML" },
  { name: "Figma" },
  { name: "React" },
  { name: "JavaScript" },
  { name: "Tailwind CSS" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-red-900 text-white p-8">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-red-950 hover:bg-red-100 hover:text-black p-6 rounded-lg shadow-md cursor-pointer">
              <h4 className="text-xl font-semibold">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
