import React from 'react';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      {/* Logo fijo en la esquina superior izquierda */}
      <div className="fixed top-8 left-8 z-50">
        <h1 className="text-3xl font-bold font-mono tracking-tighter cursor-pointer">
          <span className="text-white">JF</span>
          <span className="text-sky-400">DEV</span>
        </h1>
      </div>

      {/* Navegación lateral vertical */}
      <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
        <ul className="flex flex-col gap-10">
          {navLinks.map((link) => (
            <li key={link.href} className="group relative flex items-center">
              <a
                href={link.href}
                // Las "bolitas" de navegación
                className="block w-5 h-5 bg-slate-300 rounded-full hover:bg-sky-400 transition-all duration-300 shadow-md"
                aria-label={link.name}
              ></a>
              
              {/* Tooltip emergente al hacer hover */}
              <span className="absolute left-10 bg-slate-800 border border-slate-700 text-sky-400 text-sm font-medium px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                {link.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;