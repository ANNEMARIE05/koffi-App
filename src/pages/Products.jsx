// Products.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  // État pour filtrer les projets par catégorie
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  // Exemples de projets de menuiserie
  const projects = [
    { id: 1, title: 'Table en Chêne Massif', category: 'mobilier', image: 'https://source.unsplash.com/featured/?oak-table', description: 'Une table robuste en chêne massif, parfaite pour votre salle à manger.' },
    { id: 2, title: 'Rénovation de Buffet Ancien', category: 'restauration', image: 'https://source.unsplash.com/featured/?furniture-restoration', description: 'Rénovation d\'un buffet ancien avec des détails sculptés.' },
    { id: 3, title: 'Étagères sur Mesure', category: 'aménagement', image: 'https://source.unsplash.com/featured/?custom-shelves', description: 'Des étagères sur mesure pour un rangement optimal et esthétique.' },
    { id: 4, title: 'Porte en Noyer avec Gravures', category: 'mobilier', image: 'https://source.unsplash.com/featured/?walnut-door', description: 'Porte intérieure en noyer avec des gravures personnalisées.' },
    { id: 5, title: 'Cuisine Aménagée', category: 'aménagement', image: 'https://source.unsplash.com/featured/?custom-kitchen', description: 'Cuisine aménagée sur mesure pour optimiser l\'espace.' },
    { id: 6, title: 'Réparation de Chaise Vintage', category: 'restauration', image: 'https://source.unsplash.com/featured/?vintage-chair', description: 'Réparation d\'une chaise vintage pour retrouver son éclat d\'origine.' },
  ];

  // Filtrer les projets en fonction de la catégorie sélectionnée
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Nos Réalisations</h1>

      {/* Filtres de catégories */}
      <div className="text-center mb-8">
        <button onClick={() => setFilter('all')} className={`px-4 py-2 mx-2 rounded ${filter === 'all' ? 'bg-green-500 text-white' : 'bg-white text-gray-700 border'}`}>
          Tous
        </button>
        <button onClick={() => setFilter('mobilier')} className={`px-4 py-2 mx-2 rounded ${filter === 'mobilier' ? 'bg-green-500 text-white' : 'bg-white text-gray-700 border'}`}>
          Mobilier
        </button>
        <button onClick={() => setFilter('restauration')} className={`px-4 py-2 mx-2 rounded ${filter === 'restauration' ? 'bg-green-500 text-white' : 'bg-white text-gray-700 border'}`}>
          Restauration
        </button>
        <button onClick={() => setFilter('aménagement')} className={`px-4 py-2 mx-2 rounded ${filter === 'aménagement' ? 'bg-green-500 text-white' : 'bg-white text-gray-700 border'}`}>
          Aménagement
        </button>
      </div>

      {/* Affichage des projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <button 
              onClick={() => navigate(`/product-detail/${project.id}`)} 
              className="text-green-500 font-semibold hover:underline"
            >
              Voir le Détail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
