import './App.css';
import { Navbar } from './pages/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Query, QueryClient, QueryClientProvider} from "@tanstack/react-query"
import React, { useState} from "react"
//------------------------------------------------------

import { Home } from './pages/home';


function App() {
  const client = new QueryClient();
  return (

    <div>
      <Navbar/>
      
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path = '/' element ={<Home/>}/>
            <Route path = '/Pedidos'/>
            <Route path = '/Clientes'/>
            <Route path = '/Produtos'/>
          </Routes>
        </Router>
      </QueryClientProvider>
    
    </div>
  )
}

export default App;
