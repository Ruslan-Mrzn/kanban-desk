import './AddCardButton.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardAddForm } from '../../store/addFormSlice';

const AddCardButton = ({number}) => {
  const dispatch = useDispatch()
  const isVisible = useSelector(state=>!state.forms[number])
  return (
    <button
      onClick={
          () => {
            dispatch(toggleCardAddForm(number))
            console.log(number)
          }
        }
      className={`addCardBtn ${isVisible ? 'visible' : 'hidden'}`}
      type='button'
    >
      <span className='plus'>+</span>Добавить карточку
    </button>
  )
}

export default AddCardButton;
