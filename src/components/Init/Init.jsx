import { useDispatch, useSelector } from 'react-redux';
import { setCounterCardsValue, setInitFalseValue } from '../../store/cardsActionCreaters';
import './Init.scss';
import { getAllCardsAsync } from '../../store/cardsActionCreaters';

const Init = () => {
  const dispatch = useDispatch();
  const { countCards, isDark } = useSelector(state => state.cardsReducer);

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value > 0 && e.target.value <= 10) {
      dispatch(setCounterCardsValue(e.target.value))
    }
  }

  const buttonGetHandler = () => {
    // dispatch(setInitFalseValue());
    dispatch(getAllCardsAsync(countCards));

  }

  return (
    <div className={isDark ? 'init init--dark' : 'init init--light'}>
      <span className={isDark ? 'init__text init__text--dark' : 'init__text init__text--light'}>Выберите количество пользователей (1 - 10):</span>

      <div className={isDark ? 'init__wrapper init__wrapper--dark' : 'init__wrapper init__wrapper--light'}>
        <input 
          className={isDark ? 'init__input init__input--dark' : 'init__input init__input--light'}
          type="number" 
          defaultValue={countCards}
          value={countCards}
          min={1} 
          max={10} 
          onChange={inputChangeHandler}
        />
        <button className={isDark ? 'init__button init__button--dark' : 'init__button init__button--light'} onClick={buttonGetHandler}>Get data</button>
      </div>
    </div>
  )
}

export { Init }
