//import { useSelector } from 'react-redux';
import './Column.css';
import AddCardButton from '../AddCardButton/AddCardButton';
import AddCardForm from '../AddCardForm/AddCardForm';
import Card from '../Card/Card';



const Column = ({title, color, cards, number}) => {

  return (
    <div
      className='column'
    >
      <h1 className='columnTitle' style={{backgroundColor: color}}>{`${title} (${cards.length})`}</h1>
      <ul
        className='list'
      >
        {
          cards && cards.map(card => (
            <Card key={card.id} card={card}/>
          ))
        }
      </ul>
      <AddCardForm number={number} />
      <AddCardButton number={number} />
    </div>
  )
}

export default Column;
