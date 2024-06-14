import './Card.scss';

const Card = ({card}) => {
  // const { card } = card;
  console.log(card)

  return (
    <div className='card'>
      <div className="card__header">
        <span className="card__span">id: {card.id}</span>
        <span className="card__span">Username: {card.username}</span>
      </div>

      <div className="card__main">
        <span className="card__span">Name: {card.name}</span>
        <span className="card__span">Email: {card.email}</span>
        <span className="card__span">Address:</span>
        <div className="card__wrapper">
          <span className="card__span">Street: {card.address.street}</span>
          <span className="card__span">Suite: {card.address.suite}</span>
          <span className="card__span">City: {card.address.City}</span>
          <span className="card__span">Zipcode: {card.address.zipcode}</span>
          <span className="card__span">Geo:</span>
          <div className="card__wrapper">
            <span className="card__span">Lat: {card.address.geo.lat}</span>
            <span className="card__span">Lng: {card.address.geo.lng}</span>
          </div>
        </div>
        <span className="card__span">Phone: {card.phone}</span>
        <span className="card__span">Website: {card.website}</span>
        <span className="card__span">Company:</span>
        <div className="card__wrapper">
          <span className="card__span">Name: {card.company.name}</span>
          <span className="card__span">Catch phrase: {card.company.catchPhrase}</span>
          <span className="card__span">Bs: {card.company.bs}</span>
        </div>
      </div>

      <div className="card__footer">
        <button className="card__delete">delete</button>
      </div>
    </div>
  )
}

export { Card }