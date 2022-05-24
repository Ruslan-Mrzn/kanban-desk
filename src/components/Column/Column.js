//import { useSelector } from 'react-redux';
import './Column.css';
import AddCardButton from '../AddCardButton/AddCardButton';
import AddCardForm from '../AddCardForm/AddCardForm';
import Card from '../Card/Card';



const Column = ({title, color, cards, number}) => {

  return (
    <div className='column'>
      <h1 className='columnTitle' style={{backgroundColor: color}}>{`${title} (${cards.length})`}</h1>
      <ul
        className='list'
        onDragOver={
          (e) => e.preventDefault()
        }
        onDragEnter={
          (e) => e.preventDefault()

        }
        onDragLeave={
          (e) => {
            e.preventDefault()
            if(e.target.className == 'list') {
              const cards = e.target.closest('.column').querySelector('.list').querySelectorAll('.card')
              cards.forEach(card=>card.style.marginTop = '0')
              console.log(cards)
              //list.style.height = `${list.offsetHeight-100}px`
            }
          }
        }
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
