import './App.css'
import Home from './pages/home/home'
import Card from './pages/home/card'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {

  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/card' element={<Card/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
