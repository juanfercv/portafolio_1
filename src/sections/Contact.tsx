import React from 'react';
import { FaAddressCard, FaLinkedin } from 'react-icons/fa';
import { SiGmail, SiGithub, SiInstagram } from 'react-icons/si';

const contacts = [
  {
    label: 'GitHub',
    href: 'https://github.com/juanfercv',
    icon: <SiGithub className="text-white" />,
  },
  {
    label: 'Gmail',
    icon: <SiGmail className="text-red-500" />,
  },
  {
    label: 'Instagram',
    icon: <SiInstagram className="text-white" />,
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin className="text-[#0a66c2]" />,
  },
];

const Contact: React.FC = () => (
  <section id="contacto" className="px-6 py-16 pl-20 md:py-20 md:pl-32">
    <div className="mx-auto w-full max-w-5xl">
      <h2 className="mb-8 flex items-center gap-3 text-4xl font-light tracking-wide text-white md:mb-10 md:text-5xl">
        <FaAddressCard aria-hidden="true" className="shrink-0 text-3xl md:text-4xl" />
        Contacto
      </h2>

      <ul className="flex flex-wrap items-start justify-center gap-8 md:gap-12">
        {contacts.map((contact) => {
          const content = (
            <>
              <span aria-hidden="true" className="text-5xl md:text-6xl">
                {contact.icon}
              </span>
              <span className="text-lg text-white md:text-xl">{contact.label}</span>
            </>
          );

          return (
            <li key={contact.label}>
              {contact.href ? (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-w-20 flex-col items-center gap-1 transition-transform hover:-translate-y-1"
                >
                  {content}
                </a>
              ) : (
                <div className="flex min-w-20 flex-col items-center gap-1">
                  {content}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Contact;
