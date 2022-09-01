import { Routes , Route } from 'react-router-dom'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import './App.css'
import Login from '../Login/Login'
import Main from '../Main/Main'
import Register from '../Register/Register'

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Routes>
        <Route path='/login' element={ <Login />}/>
        <Route path='/register' element={ <Register />}/>
        <Route path='/' element={ <Main />} />
      </Routes>
    </DndProvider>

  );
}

export default App;
