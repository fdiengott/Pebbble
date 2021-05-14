import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Avatar from '../user/avatar'; 

const CardIndexItemFooter = ({ card, user }) => {
  
  return (
    <aside className="card-index-footer">
      <div>
        <Link to={`/users/${user.id}`}>
          <Avatar user={user}/>
        </Link>
        <h3>{user.name}</h3>
      </div>
      <div>
        <span className={card.liked ? "icon-pink" : "icon-gray"} /* onClick={} */
        >{<FontAwesomeIcon icon={faHeart}/>}</span><span>{card.likes}</span>
      </div>
    </aside>
  )
}; 

export default CardIndexItemFooter; 