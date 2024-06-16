import { useSelector } from 'react-redux';
import { CardsList } from '../CardsList';
import './Main.scss';

const Main = () => {
  const { isDark } = useSelector(state => state.cardsReducer);

  return (
    <main className={isDark ? 'main main--dark' : 'main main--light'}>
      <CardsList />
    </main>
  )
}

export { Main }