import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  './css/cabecalho.css'
import  './css/rodape.css'
import './css/estilo.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/login.jsx';
import Cadastro from './routes/cadastro.jsx';
import Descricao from './routes/descricao.jsx';
import Integrantes from './routes/integrantes.jsx';
import Home from './routes/home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/cadastro",
        element: <Cadastro/>
      },
      {
        path: "/descricao",
        element: <Descricao/>
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