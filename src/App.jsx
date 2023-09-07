import { Outlet } from "react-router-dom";
import Cabecalho from "./components/cabecalho";
import Rodape from "./components/rodape";


export default  function App() {
  

  return (
    <>
      <div className="container">
        <Cabecalho/>
        <Outlet/>
      <Rodape/>
      </div>
      
    </>
  )
}


