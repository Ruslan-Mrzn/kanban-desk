import './Card.css'
import { useDeleteCardMutation } from '../services/kanbanService'

const Card = ({card}) => {

  const [deleteCard] = useDeleteCardMutation()

  return (
    <li
      className="card"
      draggable={true}
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

      <button
        className='cardDelete'
        type='button'
        onClick={()=>{
          deleteCard(card.id)
        }}
      >X
      </button>
    </li>
  )
}

export default Card
