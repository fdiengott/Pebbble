import React from 'react'
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';

import Avatar from '../user/avatar'; 


class CardDetails extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.fetchCard(this.props.card.id)
  }

  render() {
    const { user, card } = this.props; 

    const avatarLink = (
      <Link to="#"> {/* this will be to the user show page*/}
        <Avatar user={user}/>
      </Link>
    ); 

    return (

      <main>
        <header>
          <section>
            { avatarLink }
            <div className="card-header-text">
              <h2>{card.title}</h2>
              <div className="inline-card-header-text">
                <span>{user.name}</span>
                <span><button>Follow</button></span>
                <span><button>Hire Me</button></span>
              </div>
            </div>
          </section>
          <aside>
            <button>Save</button>
            <button><span>{
              <FontAwesomeIcon icon={faHeart} />
            }</span> Like</button>
          </aside>
        </header>
        <img src={card.img} alt={card.title}/>
        <p>{card.description}</p>
        <footer>
          { avatarLink }
          <h3>{user.name}</h3>
          <button className="pink-button"
            ><FontAwesomeIcon icon={faEnvelope} 
            />Hire Me
          </button>
        </footer>
      </main>
    )
  }
}


export default CardDetails; 