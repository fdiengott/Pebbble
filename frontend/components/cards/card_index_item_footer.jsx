import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Avatar from '../user/avatar'; 

const CardIndexItemFooter = ({ card }) => {
  return (
    <aside>
      {/* <Avatar currentUser={user}/> */}
      <div>
        <span className={card.liked ? "icon-pink" : "icon-gray"} /* onClick={} */
        >{<FontAwesomeIcon icon={faHeart}/>}</span><span>{card.likes}</span>
      </div>
    </aside>
  )
}; 

export default CardIndexItemFooter; 