import React from 'react';
import { useAboutUs } from '../context/AboutUsContext';

const AboutUs = () => {
  const { heading, text, team } = useAboutUs();

  return (
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
      <h3>The Team</h3>
      <ul>
        {team.map((member, index) => (
          <li key={index}>
            <strong>{member.name}</strong> - {member.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUs;