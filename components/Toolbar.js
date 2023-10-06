import React from 'react';

function Toolbar({ links = [] }) {
  return (
    <div className="bg-custom-dark p-6 flex items-center border-b border-gray-800 shadow-md">
      <img src="/Vojo_Logo.png" alt="Logo" className="h-10 mr-6" />
      <div className="space-x-5">
        {links.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Toolbar;
