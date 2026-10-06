import React from 'react';
import { FaListUl, FaReact } from 'react-icons/fa';
import {
  SiExpress,
  SiFigma,
  SiJavascript,
  SiNodedotjs,
  SiVuedotjs,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Vue.js', icon: <SiVuedotjs className="text-emerald-400" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'Figma', icon: <SiFigma className="text-fuchsia-400" /> },
  { name: 'Express.js', icon: <SiExpress className="text-white" /> },
];

const Skills: React.FC = () => (
  <section id="skills" className="px-6 py-16 pl-20 md:py-20 md:pl-32">
    <div className="mx-auto w-full max-w-5xl">
      <h2 className="mb-8 flex items-center gap-3 text-4xl font-light tracking-wide text-white md:mb-10 md:text-5xl">
        <FaListUl aria-hidden="true" className="shrink-0 text-3xl md:text-4xl" />
        Skills
      </h2>

      <ul className="flex flex-wrap justify-center gap-4 rounded-[2.5rem] border-2 border-sky-400 p-4 md:gap-5 md:p-5">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex h-17 w-full max-w-55 items-center gap-5 rounded-2xl border border-sky-400 px-4 text-xl text-white md:w-55 md:max-w-none md:text-2xl"
          >
            <span aria-hidden="true" className="flex w-10 shrink-0 justify-center text-4xl">
              {skill.icon}
            </span>
            <span className="whitespace-nowrap">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
