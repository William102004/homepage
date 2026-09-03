import React from 'react';
import type { IconType } from 'react-icons';
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiSwift,
  SiPhp,
  SiPerl,
  SiHtml5,
  SiR,
  SiReact,
  SiDotnet,
  SiNodedotjs,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiRstudioide,
  SiJupyter,
  SiXampp,
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa6';
import { TbBrandCSharp, TbSql } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import officeSuiteIcon from '../textures/officeSuite.png';
import SASIcon from '../textures/sas.svg';
import '../css/Skills.css';

type Skill = {
  name: string;
  icon?: IconType;
  color?: string;
  image?: string;
};

const languages: Skill[] = [
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F0DB4F' },
  { name: 'Swift', icon: SiSwift, color: '#F05138' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'Perl', icon: SiPerl, color: '#39457E' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'SQL', icon: TbSql, color: '#4479A1' },
  { name: 'R', icon: SiR, color: '#276DC3' },
  { name: 'SAS', image: SASIcon },
];

const frameworks: Skill[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: '.Net Maui, .Net 8.0, and ASP.NET Core Web API', icon: SiDotnet, color: '#512BD4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
];

const databases: Skill[] = [
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Google Firebase', icon: SiFirebase, color: '#FFCA28' },
];

const tools: Skill[] = [
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  { name: 'Visual Studio Code', icon: VscVscode, color: '#007ACC' },
  { name: 'R Studio', icon: SiRstudioide, color: '#75AADB' },
  { name: 'Jupyter Notebook', icon: SiJupyter, color: '#F37626' },
  { name: 'Microsoft Office Suite', image: officeSuiteIcon },
  { name: 'XAMPP', icon: SiXampp, color: '#FB7A24' },
];

const practices: Skill[] = [
  { name: 'Agile' },
  { name: 'Kanban' },
  { name: 'Scrum' },
  { name: 'Object-Oriented Programming' },
  { name: 'CRUD' },
  { name: 'Data Visualization' },
];

const fluentLanguages: Skill[] = [
  { name: 'English' },
  { name: 'Spanish' },
];

function SkillCard({
  title,
  skills,
  showIconSlot = true,
  twoColumn = false,
  className,
}: {
  title: string;
  skills: Skill[];
  showIconSlot?: boolean;
  twoColumn?: boolean;
  className?: string;
}) {
  return (
    <div className={`skills-card${className ? ` ${className}` : ''}`}>
      <h2>{title}</h2>
      <ul className={`skill-list${twoColumn ? ' skill-list--two-col' : ''}`}>
        {skills.map(({ name, icon: Icon, color, image }) => (
          <li key={name}>
            {showIconSlot && (
              <span className="skill-icon" aria-hidden="true">
                {Icon &&
                  React.createElement(Icon as React.FC<{ color?: string }>, {
                    color,
                  })}
                {!Icon && image && <img src={image} alt="" />}
              </span>
            )}
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <section className="Skills-page">
      <div className="Skills-layout">
        <h1 className="Skills-title">Skills</h1>
        <div className="Skills-content">
          <div className="skills-grid">
            <SkillCard
              title="Programming Languages"
              skills={languages}
              twoColumn
            />
            <SkillCard
              title="Frameworks"
              skills={frameworks}
              className="skills-card--matched"
            />
            <SkillCard title="Databases" skills={databases} />
            <SkillCard title="Tools" skills={tools} />
            <SkillCard
              title="Practices & Methodologies"
              skills={practices}
              showIconSlot={false}
              twoColumn
              className="skills-card--matched"
            />
            <SkillCard
              title="Fluent Languages"
              skills={fluentLanguages}
              showIconSlot={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
