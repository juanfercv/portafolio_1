import React from 'react';

const About: React.FC = () => (
  <section id="sobre-mi" className="px-6 py-16 pl-20 md:py-20 md:pl-32">
    <div className="mx-auto w-full max-w-4xl border-2 border-sky-500 p-1">
      <h2 className="text-4xl font-light tracking-wide text-white md:text-5xl">
        Sobre mí
      </h2>

      <div className="space-y-10 text-lg leading-[1.2] text-blue-200 md:text-2xl">
        <p>
          Soy Juan Fernando Cuaspud desarrollador enfocado en encontrar soluciones
          lógicas y eficientes a los problemas. No me obsesiono con el diseño,
          porque creo que la lógica y la arquitectura son el verdadero motor del
          desarrollo. Mi prioridad es crear proyectos limpios, optimizados y con
          un rendimiento sólido que garanticen funcionalidad y escalabilidad.
        </p>

        <p>
          Actualmente curso el quinto y último semestre de la Tecnología en
          Desarrollo de Software. Mi formación abarca desarrollo web y backend,
          aplicaciones móviles híbridas, bases de datos relacionales y no
          relacionales, arquitectura de software, DevOps y aseguramiento de la
          calidad del software, reforzado con prácticas duales y proyectos
          integradores.
        </p>

        <p>
          Hasta el momento he completado cuatro semestres de formación, tiempo
          durante el cual he fortalecido mis competencias en programación,
          desarrollo de aplicaciones y manejo de herramientas tecnológicas,
          consolidando una base sólida para afrontar proyectos más complejos y
          profesionales.
        </p>
      </div>
    </div>
  </section>
);

export default About;
