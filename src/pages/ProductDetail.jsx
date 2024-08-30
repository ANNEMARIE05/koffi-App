// ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Exemple de données de projet, ajustez pour charger dynamiquement les données via une API
  const project = {
    id,
    title: 'Table en Chêne Massif',
    description: 'Cette table en chêne massif est fabriquée à la main avec une attention particulière aux détails. Idéale pour une salle à manger élégante.',
    image: 'https://source.unsplash.com/featured/?oak-table',
    price: '500€',
  };

  const handleOrder = () => {
    alert('Redirection vers le formulaire de commande...');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/1234567890?text=Bonjour, je suis intéressé par ${project.title}`, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <button onClick={() => navigate(-1)} className="mb-4 text-green-500 hover:underline">← Retour</button>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded mb-6" />
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <p className="text-lg font-semibold mb-4">Prix: {project.price}</p>

        <div className="flex gap-4">
          <button 
            onClick={handleOrder} 
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            Commander
          </button>
          <button 
            onClick={handleWhatsApp} 
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Contactez-moi sur WhatsApp
          </button>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500">Pour toute question, contactez-nous au :</p>
          <p className="text-lg font-semibold text-gray-800">+123 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
