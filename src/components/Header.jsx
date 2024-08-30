import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">Koffi-Ménuisierie</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Accueil</Link></li>
          <li><Link to="/qsn" className="hover:text-gray-300">Qui sommes nous</Link></li>
          <li><Link to="/products" className="hover:text-gray-300">Voir nos produits</Link></li>
          <li><Link to="/orders" className="hover:text-gray-300">Passer une commande</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contactez-moi</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
