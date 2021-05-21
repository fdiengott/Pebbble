import React from 'react'; 
import { Link } from 'react-router-dom'; 

// import HoverVideoPlayer from 'react-hover-video-player'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import CardIndexItemFooter from './card_index_item_footer'; 


class CardIndexItem extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { autoPlay: false }

    this.autoPlayOn = this.autoPlayOn.bind(this); 
    this.autoPlayOff = this.autoPlayOff.bind(this); 
    this.openCollectionModal = this.openCollectionModal.bind(this); 
  }

  autoPlayOn () {
    this.setState({autoPlay: true})
  }

  autoPlayOff () {
    this.setState({autoPlay: false})
  }

  openCollectionModal(e) {
    e.preventDefault(); 
    this.props.openModal(this.props.card.id); 
    document.body.style.overflow = 'hidden';
  }

  render () {
    const { card, user } = this.props; 

    const cardHover = (
      <section className="card-hover-info">
        <h3>{card.title}</h3>
        <aside className="card-buttons">
          <div>
            <button onClick={this.openCollectionModal} >{<FontAwesomeIcon icon={faFolderPlus}/>}</button>
          </div>
          <div /* onClick={} */ >
            <button>{<FontAwesomeIcon icon={faHeart}/>}</button>
          </div>
        </aside>
      </section>
    )

    
    let cardElement; 

    if (card.animated) {
      cardElement = (
        <div className="card-img" 
          onMouseOver={this.autoPlayOn} 
          onMouseLeave={this.autoPlayOff}
        >
          { cardHover }
          <video src={card.img} /*autoPlay={this.state.autoPlay}*/ autoPlay loop muted/>
        </div>
      )
    } else {
        cardElement = (
          <div className="card-img" >
            { cardHover }
            <img src={card.img} alt={card.title}/>
          </div>
        )
    }


    return (
      <li className="card-index-item">
        <Link to={`/cards/${card.id}`}>
          { cardElement }
        </Link>
        { 
          user ? <CardIndexItemFooter card={card} user={user} /> : null
        }
      </li>
    )
  }
}

export default CardIndexItem; 