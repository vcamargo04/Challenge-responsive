import React from 'react';
import { Link } from 'react-router-dom';
import '../css/solicitarVistoria.css';

export default function SolicitarVistoria() {
  return (
    <div className="home-container">
      <h2>Bem-vindo à Página Home</h2>
      
      <p>
        Nós somo
      </p>
      <Link to="/vistoria" className="solicitar-vistoria-button">
        Solicitar Vistoria
      </Link>
    </div>
  );
}
