import './Main.scss';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCardsAsync } from '../../store/cardsActionCreaters';
import { CardsList } from '../CardsList';
import { Loader } from '../Loader/Loader';
import { Init } from '../Init';

const Main = () => {
  const dispatch = useDispatch();
  const { isLoading, isInit } = useSelector(state => state.cardsReducer);

  const preloadData = useCallback(async () => {
    dispatch(getAllCardsAsync());
  }, [dispatch])
  
  useEffect(() => {
    preloadData()
      .catch(console.error);
  }, [preloadData])

  if (isInit) {
    return <Init />
  }

  if (isLoading) {
    return <Loader />
  }
   
  return (
    <main className='main'>
      <CardsList />
    </main>
  )
}

export { Main }
