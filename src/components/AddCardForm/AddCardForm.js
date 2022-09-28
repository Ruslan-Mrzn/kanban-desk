import './AddCardForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCardAddForm } from '../../store/addFormSlice';
import { useAddCardMutation } from '../services/kanbanService';
import { useState } from 'react';

const AddCardForm = ({number}) => {
  const isOpened = useSelector(state=>state.forms[number])
  const dispatch = useDispatch()
  const [cardText, setCardText] = useState('')
  const [addCard] = useAddCardMutation()
  const handleChange = (e) => {
    setCardText(e.target.value)
  }


  return (
    <form
      className={`form ${isOpened ? 'opened' : 'closed'}`}
      onSubmit={async (e) => {
        e.preventDefault()
        try {
          await addCard({row: `${number}`, text: cardText}).unwrap()
          setCardText('')
          dispatch(toggleCardAddForm(number))
          window.location.reload()
        }
        catch (err) {
          console.error(err)
        }
      }}
    >
      <textarea onChange={handleChange} className='textInput' placeholder='Ввести заголовок для этой карточки'></textarea>
      <div className='formButtonsWrapper'>
        <button className='submitForm' type='submit'>Добавить карточку</button>
        <button className='closeForm' type='button' onClick={()=>dispatch(toggleCardAddForm(number))}>+</button>
      </div>

    </form>
  )
}

export default AddCardForm;
