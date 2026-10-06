import React from 'react';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <div className="fixed left-8 top-8 z-50">
        <h1 className="cursor-pointer font-mono text-3xl font-bold tracking-tighter">
          <span className="text-white">JF</span>
          <span className="text-sky-400">DEV</span>
        </h1>
      </div>

      <nav className="fixed left-8 top-1/2 z-50 -translate-y-1/2">
        <ul className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <li key={link.href} className="group relative flex items-center">
              <a
                href={link.href}
                className="block h-5 w-5 rounded-full bg-slate-300 shadow-md transition-all duration-300 hover:bg-sky-400"
                aria-label={link.name}
              />
              <span className="pointer-events-none absolute left-10 whitespace-nowrap rounded border border-slate-700 bg-slate-800 px-3 py-1 text-sm font-medium text-sky-400 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
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
