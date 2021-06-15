import React from 'react'; 
import { Link, withRouter } from 'react-router-dom'; 

// import HoverVideoPlayer from 'react-hover-video-player'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import CardIndexItemFooter from './card_index_item_footer'; 


class CardIndexItem extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { 
      autoPlay: false,
      likeId: this.getLikeId(),
    }

    this.autoPlayOn = this.autoPlayOn.bind(this); 
    this.autoPlayOff = this.autoPlayOff.bind(this); 
    this.openCollectionModal = this.openCollectionModal.bind(this); 
    this.handleLike = this.handleLike.bind(this); 
  }

  getLikeId() {
    return this.props.likes?.find(like => like.cardId === this.props.card.id)?.id
  }

  autoPlayOn () {
    this.setState({autoPlay: true})
  }

  autoPlayOff () {
    this.setState({autoPlay: false})
  }

  openCollectionModal(e) {
    e.preventDefault(); 

    if (this.props.currentUserId) {
      this.props.openModal(this.props.card.id); 
      document.body.style.overflow = 'hidden';
    } else {
      this.props.history.push("/login")
    }
  }

  handleLike(e) {
    e.preventDefault(); 
    
    const { likeId } = this.state;

    if (likeId) {
      this.props.deleteLike(likeId).then( () => {
        this.setState({ likeId: undefined })
      }); 
    } else {
      this.props.createLike({liker_id: this.props.currentUserId, card_id: this.props.card.id})
        .then( (data) => this.setState({ likeId: data.like.id })
      ); 
    }
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
          <div onClick={this.handleLike} >
            <button className={this.state.likeId ? "icon-pink" : "icon-gray"}>{<FontAwesomeIcon icon={faHeart}/>}</button>
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
          user ? <CardIndexItemFooter card={card} user={user} handleLike={this.handleLike} liked={!!this.state.likeId}/> : null
        }
      </li>
    )
  }
}

export default withRouter(CardIndexItem); 