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
      onDragOver={
        (e) => {
          e.preventDefault()
          e.stopPropagation()
          if(e.target.classList.contains('addCardBtn')) {
            e.target.style.marginTop = '100px'
          }
          return
        }
      }
    >
      <span className='plus'>+</span>Добавить карточку
    </button>
  )
}

export default AddCardButton;
