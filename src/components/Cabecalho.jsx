import { Link } from "react-router-dom";

export default function Cabecalho() {
    return (
        <>
        <header className="header">
        <div>
        <img src="./Porto.png" alt="Logo da Porto cabecalho" />
        
        
        </div>
        <div>
            <button> <Link to="/dados">Teste</Link></button>
            <button></button>
            <button></button>
        </div>
        </header>


        </>
    )
}