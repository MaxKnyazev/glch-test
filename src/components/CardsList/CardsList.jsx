import { useSelector } from 'react-redux';
import { Card } from '../Card/Card';
import './CardsList.scss';

const CardsList = () => {
  const { cards } = useSelector(state => state.cardsReducer);

  return (
    <ul className='cardsList'>
      {cards.map(card => <Card card={card} key={card.id}/> )}
    </ul>
  )
}

export { CardsList }
