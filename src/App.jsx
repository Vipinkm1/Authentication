
import './App.css'
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Home from './components/Home/Home'
import SignUp from './components/Signup/SignUp'
import Login from './components/Login/Login'
import ForgotPass from './components/Forgot/ForgotPass'

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path= '/home' element={<Home />}/>
        <Route path = '/' element={<SignUp/>}/>
        <Route path = '/login' element= {<Login/>}/>
        <Route path = 'forgot' element= {<ForgotPass/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
