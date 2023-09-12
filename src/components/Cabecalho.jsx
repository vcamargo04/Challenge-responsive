import { Link } from "react-router-dom";

export default function Cabecalho() {
    return (
        <>
        <header className="header">
        <div>
        <img className="logo-pedal-seguro" src="./pedal_seguro_dark.png" alt="Logo da Pedal Seguro" />
        
        
        </div>
        <div>
            <nav>
            <div className="btn-cabecalho-1">

            
            <button className="btn-cabecalho"><Link className="link" to="/login">LOGIN</Link></button>
            <button className="btn-cabecalho"><Link className="link" to="/cadastro">CADASTRO</Link></button> 
            <button className="btn-cabecalho"><Link className="link" to="/descricao">Descrição</Link></button>
            <button className="btn-cabecalho"><Link className="link" to="/integrantes">Integrantes</Link></button>
            
            
            </div>
            
            </nav>
        </div>
        </header>


        </>
    )
}