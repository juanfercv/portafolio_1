// src/sections/Experience.tsx
import React from 'react';
import fotoPerfil from '../assets/perfil.jpeg';
import ExperienceCard, { type ExperienceItem } from '../components/ExperienceCard';

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: 'Practicante Full Stack Developer',
      company: 'LINKEARNET S.A, Yavirac',
      period: 'Enero 2024 - Enero 2026',
      hours: '1,440 horas acumuladas · 8-9 meses de prácticas preprofesionales',
      description:
        'Proyecto web full stack con Node.js, Express, Vue.js, PostgreSQL, MySQL y metodología Scrum.',

    },
    {
      id: 2,
      role: 'Asistente de TIC - Aplicaciones y Soporte',
      company: 'Agencia Nacional de Transito',
      period: 'Julio 2026 - octubre 2026',
      hours: null,
      description:
        'Apoyo en el área de TIC, brindando soporte técnico y asistencia en aplicaciones en su debida documentacion',

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

          <div className="ml-4 md:ml-6">
            <div className="border-l border-slate-600">
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>

            <div className="relative h-16 rounded-bl-2xl border-l border-b border-slate-600">
              <span className="absolute right-0 bottom-0 translate-y-1/2 whitespace-nowrap rounded-full border border-sky-400/60 bg-[#0f172a] px-4 sm:px-8 py-2 text-sm sm:text-base font-medium text-sky-400">
                Mi camino continúa
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
