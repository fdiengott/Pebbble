import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faHeart } from '@fortawesome/free-solid-svg-icons';



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
      <aside>
        {/* <Avatar currentUser={user}/> */}
        <div>
          <span className={card.liked ? "icon-pink" : "icon-gray"} /* onClick={} */
          >{<FontAwesomeIcon icon={faHeart}/>}</span><span>{card.likes}</span>
        </div>
      </aside>
    </li>
  )
}

export default CardIndexItem; 