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
    this.props.fetchCard(this.props.match.params.cardId).then( card => (
        this.props.fetchUser(card.card.creatorId)
      )
    ); 
  }

  render() {
    const { user, card } = this.props; 
    
    if (!user || !card) return null; 


    const avatarLink = (
      <Link to={`/users/${card.creatorId}`}> 
        <Avatar user={user}/>
      </Link>
    ); 

    const image = card.animated ? (
      <video src={card.img} autoPlay loop muted/>
    ) : (
      <img src={card.img} alt={card.title}/>
    )


    return (
      <main className="card-details">
        <div className="back-banner" onClick={() => window.history.back()}>
          <span>&times;</span>
        </div>
        <div className="card-details-container">
          <header>
            <section>
              <div className="image-cropper">
                { avatarLink }
              </div>
              <div className="card-header-text">
                <h2>{card.title}</h2>
                <div className="inline-card-header-text">
                  <div>{user.name}<span>&#183;</span>
                    <a className="follow-button">Follow</a>
                    <span>&#183;</span>
                    <div className="email-wrapper">
                      <a className="email-button">Hire Me</a>
                      <u className="email-popup">Send a message about a work opportunity
                        <u className="arrow-down"></u>
                      </u>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <aside>
              <button>Save</button>
              <button><span>{
                <FontAwesomeIcon icon={faHeart} />
              }</span>Like</button>
            </aside>
          </header>
          <div className="image-container">
            { image }
          </div>
          <footer>
            <p>{card.description}</p>
            <div className='avatar-container'>
              <hr/>
              { avatarLink }
            </div>
            <h3>{user.name}</h3>
            <button className="pink-button"
              ><span><FontAwesomeIcon icon={faEnvelope} 
              /></span>Hire Me
            </button>
          </footer>
        </div>
      </main>
    )
  }
}


export default CardDetails; 