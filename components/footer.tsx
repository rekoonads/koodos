import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-xs">&copy; {new Date().getFullYear()} KOODS INTERACTIVE ENTERTAINMENT. All rights reserved.</p>
          <div className="flex space-x-3">
            <p className="text-xs">131 continental drive suite 305 newark delware 19713</p>
            <a href="tel:+17067190001" className="text-xs hover:text-gray-400">+17067190001</a>
            <a href="mailto:hello@koodos.in" className="text-xs hover:text-gray-400">hello@koodos.in</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;