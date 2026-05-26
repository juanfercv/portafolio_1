// src/sections/Experience.tsx
import React from 'react';
import fotoPerfil from '../assets/perfil.jpeg';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      role: 'Practicante Full Stack Developer',
      company: 'LINKEARNET S.A, Yavirac',
      period: 'Enero 2024 - Enero 2026',
      hours: '1,440 horas acumuladas · 8-9 meses de prácticas preprofesionales',
      description:
        'Proyecto web full stack con Node.js, Express, Vue.js, PostgreSQL, MySQL y metodología Scrum.',
    },
  ];

  return (
    <section id="experiencia">
      <div className="min-h-screen flex flex-col justify-center px-6 pl-20 md:pl-32 py-20 ">
        <div className="max-w-5xl w-full mx-auto">

          {/* ── ProfileHeader ── */}
          <div className="flex flex-col items-center text-center py-12">

            {/* Foto + badge Disponible */}
            <div className="relative flex justify-center items-center mb-8">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-slate-700 shadow-xl z-10">
                <img
                  src={fotoPerfil} alt="Foto de perfil del usuario"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute left-[90%] md:left-full ml-2 flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/40 bg-slate-900/80 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.1)] z-0 whitespace-nowrap">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.8)]" />
                <span className="text-sm md:text-base font-medium text-slate-300">
                  Disponible
                </span>
              </div>
            </div>

            {/* Textos */}
            <h1 className="text-4xl md:text-5xl font-light text-white tracking-wide mb-3">
              Hi, soy JuanferDev
            </h1>
            <div className="flex flex-col items-center text-sky-400 text-lg md:text-xl font-medium leading-snug">
              <p>Full Stack Developer</p>
              <p>Specialized in Backend</p>
            </div>
          </div>

          {/* ── Experience ── */}

          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 tracking-wide">
            Experiencia
          </h2>

          <div className="relative border-l border-slate-600 ml-4 md:ml-6 pb-4">

            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-12 mb-16">
                <span className="absolute -left-2.75 top-6 w-5 h-5 bg-sky-400 rounded-full border-4 border-[#0f172a] shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

                <div className="border border-slate-700 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 hover:border-sky-400/30 transition-colors">
                  <div className="flex-1">
                    <h3 className="text-sky-400 text-xl md:text-2xl font-medium mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-slate-300 font-medium mb-2">{exp.company}</p>
                    <p className="text-slate-400 text-sm mb-1">{exp.period}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{exp.hours}</p>
                  </div>

                  <div className="hidden md:block w-px bg-slate-600" />
                  <div className="md:hidden h-px w-full bg-slate-600 my-2" />

                  <div className="flex-1 flex items-center">
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Continuara*/}
            <div className="relative">
              <div className="absolute bottom-0 left-0 right-6 h-px bg-slate-600" />
              <div className="absolute -right-0.75 -bottom-2.25 w-5 h-5 bg-sky-400 rounded-full border-4 border-[#0f172a] shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
              <div className="flex justify-end pr-12 pb-6">
                <button className="border border-slate-500 hover:border-sky-400 text-sky-400 bg-[#0f172a] px-8 py-2 rounded-full font-medium transition-colors">
                  Continuará...
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;