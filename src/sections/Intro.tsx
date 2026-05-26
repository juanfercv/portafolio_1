// src/sections/Intro.tsx
import React from 'react';

const Intro: React.FC = () => {
  // Ingredientes exactos de tu nueva imagen
  const ingredients: string[] = [
    "Full Stack Developer",
    "Backend Lover",
    "Coder with Technical English A2.2",
    "Database Apprentice",
    "Clean Code Enthusiast",
    "...coffee and encebollado"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        
        {/* BLOQUE IZQUIERDO: LOGO */}
        <div className="flex flex-col items-center">
          {/* Icono </> */}
          <div className="text-7xl md:text-[6rem] font-mono font-black mb-2 leading-none">
            <span className="text-white">&lt;</span>
            <span className="text-sky-400">/</span>
            <span className="text-white">&gt;</span>
          </div>
          
          {/* Tipografía JUANFER DEV */}
          <div className="flex flex-col w-full">
            <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter leading-none">
              JUANFER
            </h1>
            <h2 className="text-sky-400 text-5xl md:text-6xl font-black tracking-tighter text-right leading-none -mt-1 md:-mt-3">
              DEV
            </h2>
          </div>
        </div>

        {/* BLOQUE DERECHO: CÓDIGO */}
        <div className="font-mono text-sm md:text-base lg:text-lg text-green-500 mt-10 md:mt-0 tracking-tight">
          <p>
            const Juanfer: Array&lt;ingredients&gt; = [
          </p>
          <div className="pl-6 md:pl-8 flex flex-col gap-1 my-2">
            {ingredients.map((item, index) => (
              <p key={index} className="whitespace-nowrap">
                "{item}",
              </p>
            ))}
          </div>
          <p>];</p>
        </div>

      </div>
    </section>
  );
};

export default Intro;