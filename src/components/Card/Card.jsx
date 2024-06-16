import './Card.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCardByIdSuccess } from '../../store/cardsActionCreaters';

const deleteButtonHandler = (id, dispatch, isInit) => {
  dispatch(deleteCardByIdSuccess(id));
  console.log(isInit);
}
  
const Card = ({card}) => {
  const dispatch = useDispatch();
  const { isDark, isInit } = useSelector(state => state.cardsReducer);
 
  return (
    <li className={isDark ? 'card card--dark' : 'card card--light'}>
      <div className={isDark ? 'card__header card__header--dark' : 'card__header card__header--light'}>
        <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>id: {card.id}</span>
        <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Username: {card.username}</span>
      </div>

      <div className={isDark ? 'card__main card__main--dark' : 'card__main card__main--light'}>
        <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Name: {card.name}</span>
        <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Email: {card.email}</span>
        <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Address:</span>
        <div className="card__wrapper">
          <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Street: {card.address.street}</span>
          <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Suite: {card.address.suite}</span>
          <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>City: {card.address.city}</span>
          <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Zipcode: {card.address.zipcode}</span>
          <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Geo:</span>
          <div className="card__wrapper">
            <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Lat: {card.address.geo.lat}</span>
            <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Lng: {card.address.geo.lng}</span>
          </div>
        </div>
        <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Phone: {card.phone}</span>
        <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Website: {card.website}</span>
        <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Company:</span>
        <div className="card__wrapper">
          <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Name: {card.company.name}</span>
          <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Catch phrase: {card.company.catchPhrase}</span>
          <span className={isDark ? 'card__span card__span--dark' : 'card__span card__span--light'}>Bs: {card.company.bs}</span>
        </div>
      </div>

      <div className={isDark ? 'card__footer card__footer--dark' : 'card__footer card__footer--light'}>
        <button className={isDark ? 'card__delete card__delete--dark' : 'card__delete card__delete--light'} onClick={() => {deleteButtonHandler(card.id, dispatch, isInit)}}>Delete</button>
      </div>
    </li>
  )
}

export { Card }
