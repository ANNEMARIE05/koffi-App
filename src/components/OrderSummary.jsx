import React from 'react';

const OrderSummary = ({ order }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-2">Commande #{order.id}</h3>
      <p className="text-sm text-gray-600">Date : {order.date}</p>
      <p className="text-sm text-gray-600">Total : ${order.total}</p>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
        Voir les Détails
      </button>
    </div>
  );
};

export default OrderSummary;
