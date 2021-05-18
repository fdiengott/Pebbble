import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'; 
import Avatar from './avatar'; 


const UserShowHeader = ({user}) => {

  const colors = ['purple', 'white', 'dark-blue', 'yellow', 'pink']
  let blockColors = []; 

  while (blockColors.length < 2) {
    let newColor = colors[Math.floor(Math.random() * colors.length)]; 

    if (!blockColors.includes(newColor)) {
      blockColors.push(newColor); 
    }
  }

  return (
    <section className='user-show-container'>
      <div className="details-container">
        <Avatar user={user}/>
        <h1>{user.name}</h1>
        <div className="user-buttons">
          <a className="gray-button"><span
          ><FontAwesomeIcon icon={faPlus}/></span> Follow</a>
          <a className="pink-button">Hire Me</a>
        </div>
      </div>
      <div className="colored-blocks">
        <div className={blockColors[0]}></div>
        <div className={blockColors[1]}></div>
      </div>
    </section>
  )
}

export default UserShowHeader; 