import './Card.css'

const Card = ({card}) => {
  return (
    <li
      className="card"
      draggable={true}
      onDragOver={
        (e) => {
          e.preventDefault()
          e.stopPropagation()
          if(e.target.className == 'card') {
            e.target.style.marginTop = '100px'
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

      <p>
        {card.seq_num}
      </p>
    </li>
  )
}

export default Card
