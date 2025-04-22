import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página Não Encontrada | Mira's Pizzaria</title>
        <meta
          name="description"
          content="Oops! A página que você procurou não foi encontrada no site da Mira's Pizzaria. Volte para a página inicial."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-20">
          <div className="text-center p-6">
            <h1 className="text-6xl md:text-9xl font-bold text-red-600 mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-6">
              Página Não Encontrada
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Desculpe, não conseguimos encontrar a página que você está
              procurando.
            </p>
            <Link
              to="/"
              className="inline-block bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-md hover:bg-red-800 transition duration-300"
            >
              Voltar para a Página Inicial
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
