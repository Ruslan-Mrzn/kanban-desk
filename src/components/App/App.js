import { Routes , Route } from 'react-router-dom'
import './App.css'
import Login from '../Login/Login'
import Main from '../Main/Main'
import Register from '../Register/Register'

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={ <Login />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/' element={ <Main />} />
    </Routes>

  );
}

export default App;
