import React, { useState } from 'react';
import '../css/cadastro.css';

export default function Cadastro() {
  const [dados, setDados] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    telefone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    const clientesCadastrados = JSON.parse(localStorage.getItem('clientes')) || [];

   
    clientesCadastrados.push(dados);

    
    localStorage.setItem('clientes', JSON.stringify(clientesCadastrados));

    console.log('Dados do formulário:', dados);
  };

  const handleLimparFormulario = () => {
    setDados({
      nome: '',
      sobrenome: '',
      email: '',
      senha: '',
      telefone: '',
    });
  };

  return (
    <div className="cadastro-container">
      <form onSubmit={handleSubmit} className="cadastro-form">
        <fieldset>
          <legend>CADASTRO</legend>
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" name="nome" value={dados.nome} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Sobrenome:</label>
            <input type="text" name="sobrenome" value={dados.sobrenome} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={dados.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input
              type="password"
              name="senha"
              value={dados.senha}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Telefone:</label>
            <input type="tel" name="telefone" value={dados.telefone} onChange={handleChange} />
          </div>
        </fieldset>
        <button type="submit">Cadastrar</button>
        <button type="button" onClick={handleLimparFormulario}>Limpar Formulário</button>
      </form>
    </div>
  );
}


