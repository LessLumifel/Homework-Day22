import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/shop'element={<Shop/>}/>
      <Route path='/cart'element={<Cart/>}/>
      <Route/>
    </Routes>
  )
}

function WrappedApp() {
  return(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

export default WrappedApp


