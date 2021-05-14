import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import CardIndexItemFooter from './card_index_item_footer'; 

const CardIndexItem = ({ card }) => {
  return (
    <li>
      <Link to={`/cards/${card.id}`}>
        <div className="card-img">
          <div className="card-hover-info">
            <h4>{card.title}</h4>
            <section>
              <div className="card-button" /* onClick={} */ >
                <button>{<FontAwesomeIcon icon={faFolderPlus}/>}</button>
              </div>
              <div className="card-button" /* onClick={} */ >
                <button>{<FontAwesomeIcon icon={faHeart}/>}</button>
              </div>
            </section>
          </div>
          <img src={card.img} alt={card.title}/>
        </div>
      </Link>
      <CardIndexItemFooter card={card} user={user} />
    </li>
  )
}

export default CardIndexItem; 