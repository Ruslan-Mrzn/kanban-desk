import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyGetCardsQuery } from '../services/kanbanService'
import Column from '../Column/Column'
import { filterCards } from '../../utils/utils'

const Main = () => {
  const navigate = useNavigate();
  const [getCards, {data, isError, isSuccess}] = useLazyGetCardsQuery()
  useEffect(()=>{
    getCards()
    console.log(data)
    if(isError) {
      navigate('/login')
    }
    if(isSuccess) {
      localStorage.setItem('localCards', JSON.stringify(data))
    }
  }, [navigate, isError, getCards, isSuccess, data])

  return (
    isSuccess&&<div className='desk'>
      <Column title='On hold' color="#F88B4A" cards={filterCards(data, 0)} number={0}/>
      <Column title='In progress' color="#3C8BBE" cards={filterCards(data, 1)} number={1}/>
      <Column title='Needs review' color="#F5C852" cards={filterCards(data, 2)} number={2}/>
      <Column title='Approved' color="#4BA468" cards={filterCards(data, 3)} number={3}/>
    </div>
  )
}

export default Main
