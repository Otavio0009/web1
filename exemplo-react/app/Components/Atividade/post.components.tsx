'use client'; // Necessário no Next.js para usar useState e eventos de clique

import { useState } from 'react';

export function Post() {
  // Estado para controlar se foi curtido ou não
  const [curtido, setCurtido] = useState(false);

  // Estado para controlar a quantidade de curtidas
  const [likes, setLikes] = useState(0);

  // Função para alternar o estado de curtida
  function alternarCurtida() {
    if (curtido) {
      setLikes(likes - 1);
      setCurtido(false);
    } else {
      setLikes(likes + 1);
      setCurtido(true);
    }
  }

  return (
    <div className="border border-gray-300 rounded-lg p-4 max-w-sm m-2 flex flex-col gap-2">
      <h2 className="text-xl font-bold">Publicação</h2>
      <p className="text-gray-700">Estou aprendendo React!</p>
      
      <p className="font-semibold">Curtidas: {likes}</p>

      <button
        onClick={alternarCurtida}
        className={`px-4 py-2 rounded text-white font-medium transition-colors ${
          curtido 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {curtido ? 'Descurtir' : 'Curtir'}
      </button>
    </div>
  );
}