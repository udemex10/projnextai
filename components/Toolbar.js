import React from 'react';

function Toolbar({ title = "Vojo", links = [] }) {
  return (
    <div className="bg-custom-dark p-6 flex items-center">
      <h1 className="text-2xl font-bold text-white mr-6">{title}</h1>
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
