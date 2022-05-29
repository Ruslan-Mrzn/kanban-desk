import './Card.css'

import { setSelectedCard } from '../../store/updateCardSlice'
import { useDispatch } from 'react-redux'


const Card = ({card}) => {
  console.log(card)

  const dispatch = useDispatch()

  return (
    <li
      className="card"
      draggable={true}
      onDragStart={
        (e) => {
          dispatch(setSelectedCard(...card))
        }
      }
      onDragOver={
        (e) => {
          e.preventDefault()
          e.stopPropagation()
          if(e.target.className == 'card') {
            e.target.style.marginTop = '100px'

          }
          return
        }
      }

      onDragLeave={
        (e) => {
          e.preventDefault()
          e.stopPropagation()
          if(e.target.className == 'card') {
            console.log(e.target.querySelector('.cardSeq_num').textContent)
            dispatch(setSelectedCard(...{seq_num: +e.target.querySelector('.cardSeq_num').textContent -1}))
          }

        }
      }

      onDragEnd={
        (e) => {
          e.preventDefault()
        }
      }

    >
      <p>
        <span className="cardID">id: </span>
        {card.id}
      </p>
      <p>
        {card.text}
      </p>

      <p className='cardSeq_num'>
        {card.seq_num}
      </p>
    </li>
  )
}

export default Card
