// QSN.jsx
import React from 'react';

const QSN = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">Qui Sommes-nous ?</h1>
        
        <img 
          src="https://source.unsplash.com/featured/?carpenter" 
          alt="Koffi Menuiserie" 
          className="w-full h-64 object-cover rounded mb-6"
        />

        <p className="text-lg text-gray-700 mb-4">
          <strong>Agbonou Koffi</strong> est un menuisier passionné et expérimenté, spécialisé dans la création de meubles sur mesure, la rénovation, et l'aménagement intérieur. Depuis de nombreuses années, il met son savoir-faire au service de ses clients, alliant tradition et modernité dans chacun de ses projets.
        </p>
        
        <p className="text-lg text-gray-700 mb-4">
          Avec une maîtrise parfaite de son métier, M. Koffi a créé <strong>Koffi-Ménuiserie</strong> pour partager son expertise et offrir des services de qualité à ceux qui en ont besoin. Sa passion pour le bois et son souci du détail se reflètent dans chacune de ses réalisations, qu'il s'agisse de simples réparations ou de projets d'envergure.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Chez <strong>Koffi-Ménuiserie</strong>, chaque commande est unique et bénéficie d'un soin particulier pour répondre aux attentes spécifiques de chaque client. M. Koffi propose des solutions adaptées, avec un souci constant de qualité et de durabilité.
        </p>

        <h2 className="text-2xl font-bold text-green-700 mb-4">Pourquoi Choisir Koffi-Ménuiserie ?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Plusieurs années d'expérience dans la menuiserie artisanale et sur mesure.</li>
          <li>Un savoir-faire éprouvé avec des techniques traditionnelles et modernes.</li>
          <li>Des matériaux de haute qualité pour des réalisations durables.</li>
          <li>Un service personnalisé et à l'écoute de vos besoins.</li>
        </ul>

        <p className="text-lg text-gray-700 mb-4">
          Que ce soit pour un meuble unique, une rénovation, ou un aménagement intérieur complet, M. Koffi est là pour transformer vos idées en réalité. Faites confiance à <strong>Koffi-Ménuiserie</strong> pour des créations qui subliment votre espace.
        </p>

        <div className="text-center mt-6">
          <button 
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
            onClick={() => window.location.href = 'https://wa.me/1234567890'}
          >
            Contactez-moi sur WhatsApp
          </button>
          <p className="mt-4 text-gray-600">Pour toute demande, appelez-nous au : <span className="font-semibold text-gray-800">+123 456 7890</span></p>
        </div>
      </div>
    </div>
  );
};

export default QSN;
