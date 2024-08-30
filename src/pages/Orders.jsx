import React, { useState, useEffect } from 'react';
import OrderSummary from '../components/OrderSummary';

const Orders = () => {
  // État pour les options de commande
  const [woodType, setWoodType] = useState('');
  const [dimensions, setDimensions] = useState({ length: '', width: '', height: '' });
  const [finish, setFinish] = useState('');
  const [additionalNeeds, setAdditionalNeeds] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Fonction pour gérer la soumission de la commande
  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      woodType,
      dimensions,
      finish,
      additionalNeeds,
      quantity,
    };
    console.log('Commande soumise:', orderDetails);
    alert('Votre commande a été soumise avec succès!');
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Passez Votre Commande Personnalisée</h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleOrderSubmit} className="space-y-6">
          {/* Sélection du type de bois */}
          <div>
            <label className="block text-lg font-semibold mb-2">Type de Bois</label>
            <select 
              className="w-full p-3 border rounded-md"
              value={woodType}
              onChange={(e) => setWoodType(e.target.value)}
              required
            >
              <option value="">Sélectionnez un type de bois</option>
              <option value="chêne">Chêne</option>
              <option value="pin">Pin</option>
              <option value="noyer">Noyer</option>
              <option value="érable">Érable</option>
            </select>
          </div>

          {/* Dimensions */}
          <div>
            <label className="block text-lg font-semibold mb-2">Dimensions (en cm)</label>
            <div className="grid grid-cols-3 gap-4">
              <input 
                type="number" 
                placeholder="Longueur" 
                className="p-3 border rounded-md"
                value={dimensions.length}
                onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                required
              />
              <input 
                type="number" 
                placeholder="Largeur" 
                className="p-3 border rounded-md"
                value={dimensions.width}
                onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                required
              />
              <input 
                type="number" 
                placeholder="Hauteur" 
                className="p-3 border rounded-md"
                value={dimensions.height}
                onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Sélection de la finition */}
          <div>
            <label className="block text-lg font-semibold mb-2">Finition</label>
            <select 
              className="w-full p-3 border rounded-md"
              value={finish}
              onChange={(e) => setFinish(e.target.value)}
              required
            >
              <option value="">Sélectionnez une finition</option>
              <option value="naturelle">Naturelle</option>
              <option value="vernis">Vernis</option>
              <option value="laquée">Laquée</option>
              <option value="huilée">Huilée</option>
            </select>
          </div>

          {/* Besoins additionnels */}
          <div>
            <label className="block text-lg font-semibold mb-2">Besoins Additionnels</label>
            <textarea 
              className="w-full p-3 border rounded-md"
              rows="4"
              placeholder="Décrivez tout besoin supplémentaire (ex: gravures, poignées, etc.)"
              value={additionalNeeds}
              onChange={(e) => setAdditionalNeeds(e.target.value)}
            ></textarea>
          </div>

          {/* Quantité */}
          <div>
            <label className="block text-lg font-semibold mb-2">Quantité</label>
            <input 
              type="number" 
              min="1" 
              className="w-full p-3 border rounded-md"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>

          {/* Bouton de soumission */}
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition"
            >
              Soumettre la Commande
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Orders;
