import React from 'react';

const Contact = () => {
  // Exemple de données de panier (remplacer par des données réelles)
  const cartItems = [
    { id: 1, name: 'Table en bois', quantity: 1, price: 120 },
    { id: 2, name: 'Chaise en bois', quantity: 2, price: 45 },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Votre Panier</h2>
      <ul className="space-y-4">
        {cartItems.map(item => (
          <li key={item.id} className="border p-4 rounded-md shadow-sm flex justify-between items-center">
            <span>{item.name} (x{item.quantity})</span>
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <p className="text-xl font-bold">Total : ${totalPrice}</p>
        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Passer la Commande
        </button>
      </div>
    </div>
  );
};

export default Contact;
