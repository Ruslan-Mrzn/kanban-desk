//import { useSelector } from 'react-redux';
import update from 'immutability-helper'
import { useDrop } from 'react-dnd/dist/hooks';
import './Column.css';
import AddCardButton from '../AddCardButton/AddCardButton';
import AddCardForm from '../AddCardForm/AddCardForm';
import Card from '../Card/Card';
import { useState, useCallback } from 'react';
import { useUpdateCardMutation, useLazyGetCardsQuery } from '../services/kanbanService';


const Column = ({title, color, cards, number}) => {

  const [dataCards, setDataCards] = useState([...cards])

  const [updateCard] = useUpdateCardMutation()

  const [getCards] = useLazyGetCardsQuery()

  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item, monitor) => {
      console.log('hey', {
        id: item.id,
        row: number,
        text: item.text,
        seq_num: item.seqNum
      })
      updateCard({
        id: item.id,
        row: number,
        text: item.text,
        seq_num: item.seqNum
      })
      getCards()

    },
  })



  const moveCard = (dragIndex, hoverIndex) => {
    setDataCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }

  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        seqNum={card.seq_num}
        moveCard={moveCard}
      />
    )
  }

  return (
    <div
      className='column'
    >
      <h1 className='columnTitle' style={{backgroundColor: color}}>{`${title} (${cards.length})`}</h1>
      <ul
        className='list'
        ref={drop}
      >
        {
          dataCards && dataCards.map((card,i) => renderCard(card, i))
        }
      </ul>
      <AddCardForm number={number} />
      <AddCardButton number={number} />
    </div>
  )
}

export default Column;
