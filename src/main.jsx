import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  './css/cabecalho.css'
import  './css/rodape.css'
import './css/estilo.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Autenticador from './routes/autenticador.jsx';
import Dados from './routes/dados.jsx';
import Descricao from './routes/descricao.jsx';
import Num_de_Serie from './routes/num_de_serie.jsx';
import Integrantes from './routes/integrantes.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      
      {
        path: "/autenticador",
        element: <Autenticador/>
      },
      {
        path: "/dados",
        element: <Dados/>
      },
      {
        path: "/descricao",
        element: <Descricao/>
      },
      {
        path: "/num_de_serie",
        element: <Num_de_Serie/>
      },
      {
        path: "/integrantes",
        element: <Integrantes/>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router}/>
  </React.StrictMode>,
)