import React from 'react';

export type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  period: string;
  hours: string | null;
  description: string;
};

type ExperienceCardProps = {
  experience: ExperienceItem;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <div className="relative pl-8 md:pl-12 mb-16 last:mb-0">
    <span className="absolute -left-2.75 top-6 w-5 h-5 bg-sky-400 rounded-full border-4 border-[#0f172a] shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

    <div className="border border-slate-700 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 hover:border-sky-400/30 transition-colors">
      <div className="flex-1">
        <h3 className="text-sky-400 text-xl md:text-2xl font-medium mb-2">
          {experience.role}
        </h3>
        <p className="text-slate-300 font-medium mb-2">{experience.company}</p>
        <p className="text-slate-400 text-sm mb-1">{experience.period}</p>
        <p className="text-slate-500 text-xs leading-relaxed">{experience.hours}</p>
      </div>

      <div className="hidden md:block w-px bg-slate-600" />
      <div className="md:hidden h-px w-full bg-slate-600 my-2" />

      <div className="flex-1 flex items-center">
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          {experience.description}
        </p>
      </div>
    </div>
  </div>
);

export default ExperienceCard;
