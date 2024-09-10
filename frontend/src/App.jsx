import './App.css'
import Context from './contexts/Context'
import useDeveloper from './hooks/useDeveloper'
import { Routes, Route, HashRouter } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './views/Home'
import Registro from './views/Register'
import Login from './views/Login'
import Perfil from './views/Profile'

const App = () => {
  const globalState = useDeveloper()

  return (
    <Context.Provider value={globalState}>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registrarse' element={<Registro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/perfil' element={<Perfil />} />
        </Routes>
      </HashRouter>
    </Context.Provider>
  )
}

export default App
