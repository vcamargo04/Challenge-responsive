import React, { useState } from 'react';
import '../css/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    
    const clientesCadastrados = JSON.parse(localStorage.getItem('clientes')) || [];

    
    const clienteEncontrado = clientesCadastrados.find(
      (cliente) => cliente.email === email && cliente.senha === senha
    );

    if (clienteEncontrado) {
      setMensagem('Login bem-sucedido!');
    } else {
      setMensagem('Email ou senha incorretos.');
    }
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type={mostrarSenha ? 'text' : 'password'}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button
            type="button"
            className="mostrar-senha-button" 
            onClick={toggleMostrarSenha}
          >
            {mostrarSenha ? 'Ocultar Senha' : 'Mostrar Senha'}
          </button>
        </div>
        <button type="submit">Entrar</button>
        <p className="error-message">{mensagem}</p>
      </form>
    </div>
  );
}
