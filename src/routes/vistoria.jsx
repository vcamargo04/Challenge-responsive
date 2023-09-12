import React, { useState } from 'react';
import '../css/vistoria.css';

export default function Vistoria() {
  const [dadosVistoria, setDadosVistoria] = useState({
    nomeCompleto: '',
    email: '',
    cpf: '',
    telefone: '',
    endereco: '',
    marcaBike: '',
    modeloBike: '',
    anoBike: '',
    valorEstimado: '',
    observacoes: '',
  });

  const [erro, setErro] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosVistoria({ ...dadosVistoria, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (camposPreenchidos()) {
      localStorage.setItem('dadosVistoria', JSON.stringify(dadosVistoria));

      console.log('Dados da Vistoria:', dadosVistoria);
      setEnviado(true);
      setErro('');
    } else {
      setErro('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const camposPreenchidos = () => {
    const {
      nomeCompleto,
      email,
      cpf,
      telefone,
      endereco,
      marcaBike,
      modeloBike,
      anoBike,
      valorEstimado,
    } = dadosVistoria;
    return (
      nomeCompleto !== '' &&
      email !== '' &&
      cpf !== '' &&
      telefone !== '' &&
      endereco !== '' &&
      marcaBike !== '' &&
      modeloBike !== '' &&
      anoBike !== '' &&
      valorEstimado !== ''
    );
  };

  const handleLimparFormulario = () => {
    setDadosVistoria({
      nomeCompleto: '',
      email: '',
      cpf: '',
      telefone: '',
      endereco: '',
      marcaBike: '',
      modeloBike: '',
      anoBike: '',
      valorEstimado: '',
      observacoes: '',
    });
    setEnviado(false);
    setErro('');
  };

  return (
    <div className="solicitar-vistoria-container">
      <h2>Solicitar Vistoria de Bicicleta</h2>
      <form onSubmit={handleSubmit} className="solicitar-vistoria-form">
        <div className="form-group">
          <label>Nome Completo:</label>
          <input type="text" name="nomeCompleto" value={dadosVistoria.nomeCompleto} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={dadosVistoria.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>CPF:</label>
          <input type="text" name="cpf" value={dadosVistoria.cpf} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Telefone:</label>
          <input type="text" name="telefone" value={dadosVistoria.telefone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Endereço:</label>
          <input type="text" name="endereco" value={dadosVistoria.endereco} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Marca da Bicicleta:</label>
          <input type="text" name="marcaBike" value={dadosVistoria.marcaBike} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Modelo da Bicicleta:</label>
          <input type="text" name="modeloBike" value={dadosVistoria.modeloBike} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Ano da Bicicleta:</label>
          <input type="text" name="anoBike" value={dadosVistoria.anoBike} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Valor Estimado:</label>
          <input type="text" name="valorEstimado" value={dadosVistoria.valorEstimado} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Observações (se houver modificações na bike):</label>
          <textarea name="observacoes" value={dadosVistoria.observacoes} onChange={handleChange} />
        </div>
        <button type="submit">Solicitar Vistoria</button>
        <button type="button" onClick={handleLimparFormulario} className="limpar-button">Limpar Formulário</button>
        {enviado && <p className="enviado-message">Formulário enviado com sucesso!</p>}
        {erro && <p className="erro-message">{erro}</p>}
      </form>
    </div>
  );
}


