import React from 'react';

function Toolbar({ title = "Vojo", links = [] }) {
  return (
    <div className="bg-dark-shade p-4 flex items-center">
      <h1 className="text-xl font-bold text-white mr-4">{title}</h1>
      <div className="space-x-4">
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
