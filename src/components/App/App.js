import { useEffect, useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import { useGetCardsQuery } from '../services/kanbanService'
import { filterCards } from '../../utils/utils'
import './App.css'
//import api from '../../utils/api';
import Column from '../Column/Column'
import { store } from '../../store'
import { Login } from '../Login/Login'


function App() {

  const { data } = useGetCardsQuery()

  // console.log(data)

  return (
    <Routes>
      <Route path='/login' element={ <Login />}/>
      <Route path='/cards' element={
      <div className='desk'>
        <Column title='On hold' color="#F88B4A" cards={filterCards(data, 0)} number={0}/>
        <Column title='In progress' color="#3C8BBE" cards={filterCards(data, 1)} number={1}/>
        <Column title='Needs review' color="#F5C852" cards={filterCards(data, 2)} number={2}/>
        <Column title='Approved' color="#4BA468" cards={filterCards(data, 3)} number={3}/>
      </div> } />

    </Routes>

  );
}

export default App;
