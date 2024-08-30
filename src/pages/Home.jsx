import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 p-8">
      {/* Section d'En-tête avec Image de Fond */}
      <div className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
           style={{ backgroundImage: "url('https://source.unsplash.com/featured/?woodwork')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenue chez Agbonou Koffi-Ménuisierie</h1>
          <p className="text-lg mb-6">Des créations uniques, sur mesure, faites avec passion.</p>
          <a href="#services" className="bg-green-500 py-2 px-4 rounded text-white hover:bg-green-600">
            Découvrez Nos Services
          </a>
        </div>
      </div>

      {/* Section des Services */}
      <section id="services" className="my-16">
        <h2 className="text-3xl font-bold text-center mb-12">Mes Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Mobilier sur Mesure</h3>
            <p className="text-gray-600 mb-4">Des meubles conçus pour s'adapter parfaitement à votre espace et à votre style.</p>
            <img src="https://source.unsplash.com/featured/?custom-furniture" alt="Mobilier sur mesure" className="w-full h-48 object-cover mb-4 rounded" />
            <a href="#" className="text-green-500 font-semibold hover:underline">En savoir plus</a>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Restauration de Meubles</h3>
            <p className="text-gray-600 mb-4">Redonnez vie à vos meubles anciens avec notre service de restauration professionnel.</p>
            <img src="https://source.unsplash.com/featured/?furniture-restoration" alt="Restauration de meubles" className="w-full h-48 object-cover mb-4 rounded" />
            <a href="#" className="text-green-500 font-semibold hover:underline">En savoir plus</a>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Aménagement Intérieur</h3>
            <p className="text-gray-600 mb-4">Optimisez votre espace de vie avec des solutions de rangement intelligentes.</p>
            <img src="https://source.unsplash.com/featured/?interior-design" alt="Aménagement intérieur" className="w-full h-48 object-cover mb-4 rounded" />
            <a href="#" className="text-green-500 font-semibold hover:underline">En savoir plus</a>
          </div>
        </div>
      </section>

      {/* Section Portfolio */}
      <section id="portfolio" className="my-16 bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Mes Réalisations</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img src="https://source.unsplash.com/featured/?woodwork,project1" alt="Projet 1" className="w-60 h-40 object-cover rounded-lg shadow-md" />
          <img src="https://source.unsplash.com/featured/?woodwork,project2" alt="Projet 2" className="w-60 h-40 object-cover rounded-lg shadow-md" />
          <img src="https://source.unsplash.com/featured/?woodwork,project3" alt="Projet 3" className="w-60 h-40 object-cover rounded-lg shadow-md" />
          <img src="https://source.unsplash.com/featured/?woodwork,project4" alt="Projet 4" className="w-60 h-40 object-cover rounded-lg shadow-md" />
        </div>
        <div className="text-center mt-8">
          <a href="#" className="bg-green-500 py-2 px-4 rounded text-white hover:bg-green-600">Voir Tout le Portfolio</a>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="my-16">
        <h2 className="text-3xl font-bold text-center mb-12">Contactez-moi</h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <input type="text" placeholder="Votre Nom" className="w-full p-4 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Votre Email" className="w-full p-4 border border-gray-300 rounded-lg" />
            <textarea placeholder="Votre Message" className="w-full p-4 border border-gray-300 rounded-lg" rows="5"></textarea>
            <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Envoyer le Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
