import { useDispatch, useSelector } from 'react-redux';
import { setCounterCardsValue, setInitFalseValue } from '../../store/cardsActionCreaters';
import './Init.scss';
import { getAllCardsAsync } from '../../store/cardsActionCreaters';

const Init = () => {
  const dispatch = useDispatch();
  const { countCards } = useSelector(state => state.cardsReducer);

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    dispatch(setCounterCardsValue(e.target.value))
  }

  const buttonGetHandler = () => {
    dispatch(setInitFalseValue());
    dispatch(getAllCardsAsync(countCards));

  }

  return (
    <div className='init'>
      <h2>Выберите количество пользователей (1 - 10):</h2>
      <input 
        type="number" 
        defaultValue={countCards} 
        min={1} 
        max={10} 
        onChange={inputChangeHandler}
      />
      <div>
        <button onClick={buttonGetHandler}>Get data</button>
      </div>
    </div>
  )
}

export { Init }
