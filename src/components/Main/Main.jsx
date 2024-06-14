import './Main.scss';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCardsAsync } from '../../store/cardsActionCreaters';
import { CardsList } from '../CardsList';

const Main = () => {
  const dispatch = useDispatch();

  const preloadData = useCallback(async () => {
    dispatch(getAllCardsAsync());
  }, [dispatch])
  
  useEffect(() => {
    preloadData()
      .catch(console.error);;
  }, [preloadData])

  return (
    <main className='main'>
      <CardsList />
    </main>
  )
}

export { Main }
