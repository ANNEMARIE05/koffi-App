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
      <h2 className="text-3xl font-bold mb-4">De quoi avez-vous besoin</h2>
    </div>
  );
};

export default Contact;
