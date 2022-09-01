import './Card.css'
import { useRef } from 'react'
import { useDeleteCardMutation } from '../services/kanbanService'
import { useDrag, useDrop } from 'react-dnd/dist/hooks'

const Card = ({ id, text, seqNum, index, moveCard }) => {

  const [deleteCard] = useDeleteCardMutation()

  const ref = useRef(null)

  const [{ handlerId }, drop] = useDrop({
    accept: 'CARD',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
      item.seqNum = hoverIndex
      //item.text = text
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: () => {
      return { id, index, seqNum, text }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return (
    <li
      className="card"
      data-handler-id={handlerId}
      ref={ref}
      style={{ opacity: isDragging ? 0 : 1}}
    >
        <p>
          <span className="cardID">id: </span>
          {id}
        </p>
        <p>
          {text}
        </p>

        <p className='cardSeq_num'>
          {seqNum}
        </p>

        <button
          className='cardDelete'
          type='button'
          onClick={()=>{
            deleteCard(id)
          }}
        >X
        </button>

    </li>
  )
}

export default Card
