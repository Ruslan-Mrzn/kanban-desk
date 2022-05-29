import { Routes , Route } from 'react-router-dom'
import './App.css'
import Login from '../Login/Login'
import Main from '../Main/Main'

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={ <Login />}/>
      <Route path='/' element={ <Main />} />
    </Routes>

  );
}

export default App;
