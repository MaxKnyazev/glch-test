import { useDispatch, useSelector } from 'react-redux';
import './Init.scss';

const Init = () => {
  const dispatch = useDispatch();
  //******************************************************************************* */
  //******************************************************************************* */
  //******************************************************************************* */
  //******************************************************************************* */
  //******************************************************************************* */
  const { countCards } = useSelector(state => state.cardsReducer);

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
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
        <button>Get data</button>
      </div>
    </div>
  )
}

export { Init }
