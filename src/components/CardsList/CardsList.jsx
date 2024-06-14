import { Card } from '../Card/Card';
import './CardsList.scss';
import { useSelector } from 'react-redux';

const CardsList = () => {
  // const { card } = card;
  const { cards } = useSelector(state => state.cardsReducer);
  console.log(cards)

  return (
    <ul className='cardsList'>
      {cards.map(card => <Card card={card} key={card.id}/> )}
    </ul>
  )
}

export { CardsList }
