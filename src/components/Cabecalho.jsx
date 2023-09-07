import { Link } from "react-router-dom";

export default function Cabecalho() {
    return (
        <>
        <header className="header">
        <div>
        <img src="./Porto.png" alt="Logo da Porto cabecalho" />
        
        
        </div>
        <div>
            <nav>
            <div className="btn-cabecalho-1">

            <button className="btn-cabecalho"><Link className="link" to="/">Home</Link></button>
            <button className="btn-cabecalho"><Link className="link" to="/autenticador">Autenticador</Link></button>
            <button className="btn-cabecalho"><Link className="link" to="/dados">Dados</Link></button> 
            
            
            </div>
            <div className="btn-cabecalho-2">
            <button className="btn-cabecalho"><Link className="link" to="/descricao">Descrição</Link></button>
            <button className="btn-cabecalho"><Link className="link" to="/integrantes">Integrantes</Link></button>
            <button className="btn-cabecalho"><Link className="link" to="/num_de_serie">Num de Serie</Link></button>
            
            
            
            
            </div>

            </nav>
        </div>
        </header>


        </>
    )
}