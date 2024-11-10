import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Feedbacks from './pages/Feedbacks'
import Message from './pages/Message'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/feedback' element={<Feedbacks/>}/>
          <Route path='/message/:id' element={<Message/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
