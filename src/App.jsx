import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Organizacoes from './pages/Organizacoes'
import Eventos from './pages/Eventos'
import Estrategias from './pages/Estrategias'
import OrganizacaoCadastro from './pages/Cadastro/OrganizacaoCadastro'
import EventoCadastro from './pages/Cadastro/EventoCadastro'
import EstrategiaCadastro from './pages/Cadastro/EstrategiaCadastro'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/organizacoes' element={<Organizacoes/>}/>
        <Route path='/eventos' element={<Eventos/>}/>
        <Route path='/estrategias' element={<Estrategias/>}/>
        <Route path='/organizacoes/cadastro' element={<OrganizacaoCadastro/>}/>
        <Route path='/eventos/cadastro' element={<EventoCadastro/>}/>
        <Route path='/estrategias/cadastro' element={<EstrategiaCadastro/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
