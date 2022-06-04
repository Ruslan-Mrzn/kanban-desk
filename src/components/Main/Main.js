import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyGetCardsQuery } from '../services/kanbanService'
import Column from '../Column/Column'
import { filterCards } from '../../utils/utils'

const Main = () => {
  const navigate = useNavigate();
  const [getCards, {data, isError, isSuccess}] = useLazyGetCardsQuery()
  const localCards = JSON.parse(localStorage.getItem('localCards'))
  useEffect(()=>{
    getCards()
    if(isError) {
      navigate('/login')
    }
    if(isSuccess) {
      localStorage.setItem('localCards', JSON.stringify(data))
    }
  }, [navigate, isError, getCards, isSuccess, data])

  return (
    isSuccess&&<div className='desk'>
      <Column title='On hold' color="#F88B4A" cards={filterCards(localCards ? localCards : data, 0)} number={0}/>
      <Column title='In progress' color="#3C8BBE" cards={filterCards(localCards ? localCards : data, 1)} number={1}/>
      <Column title='Needs review' color="#F5C852" cards={filterCards(localCards ? localCards : data, 2)} number={2}/>
      <Column title='Approved' color="#4BA468" cards={filterCards(localCards ? localCards : data, 3)} number={3}/>
    </div>
  )
}

export default Main
