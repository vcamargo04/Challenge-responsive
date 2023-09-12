import React from 'react';
import { Link } from 'react-router-dom';
import '../css/solicitarVistoria.css';

export default function SolicitarVistoria() {
  return (
    <div className="home-container">
      <h2>Seja Bem Vindo</h2>
      
      <p>
        Agora que já conseguiu efetuar o login clique abaixo para poder seguir para o formulário de Vistoria inicial da sua Bicicleta
      </p>
      <Link to="/vistoria" className="solicitar-vistoria-button">
        Solicitar Vistoria
      </Link>
    </div>
  );
}
