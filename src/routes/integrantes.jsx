import React from 'react';
import '../css/integrantes.css';

const integrantes = [
  { nome: 'Gustavo Marques', matricula: '99512' },
  { nome: 'Luiz Prendin', matricula: '552475' },
  { nome: 'Gabriel Baltazar', matricula: '550870' },
  { nome: 'Vinicius Camargo', matricula: '99494' },
  { nome: 'Renan De Amorim', matricula: '551553' },
];

export default function Integrantes() {
  return (
    <div className="integrantes-container">
      <h2>Integrantes</h2>
      <ul className="integrantes-list">
        {integrantes.map((integrante, index) => (
          <li key={index} className="integrante-item">
            <span className="integrante-nome">{integrante.nome}</span>
            <span className="integrante-matricula">Matrícula: {integrante.matricula}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


