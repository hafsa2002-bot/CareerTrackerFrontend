import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
