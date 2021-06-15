import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'; 
import { NavLink } from 'react-router-dom'; 

import CardIndexItem from './card_index_item'; 

class CardIndex extends React.Component {
  constructor(props) {
    super(props); 

    this.state = { 
      followersCards: false, 
      clicked: false,
      followDropdown: false, 
    }; 

    this.handleClick = this.handleClick.bind(this); 
    this.handleDropdown = this.handleDropdown.bind(this); 
  }

  componentDidMount() {
    const {
      frontpage, 
      fetchUserFollows, 
      fetchCardsAndUsers,
      collectionId,
      fetchCollectionCards,
      likedCardsPage,
      fetchLikedCards,
      userId,
      currentUserId,
      fetchUserCards,
      fetchUserLikes,
    } = this.props; 

    if (frontpage) {
      // FRONTPAGE
      fetchUserFollows(currentUserId); 
      fetchCardsAndUsers(); 
      this.props.history.push('/all');

    } else if (collectionId) {
      // COLLECTION SHOW PAGE
      fetchCollectionCards(collectionId); 

    } else if (likedCardsPage) {
      // LIKED CARDS TAB
      fetchLikedCards(userId); 

    } else {
      userId ? 
        // USER SHOW PAGE
        fetchUserCards(userId) : 
        // CURRENT USER'S PAGE 
        fetchUserCards(currentUserId)
    }

    if (currentUserId) {
      fetchUserLikes(currentUserId)
    }
  }

  handleClick(type) {
    return () => {
      // if (this.state.followersCards) {
      if (type === "popular") {
        this.props.fetchCardsAndUsers().then( () => (
          this.setState({ 
            followersCards: false, 
            followDropdown: !this.state.followDropdown 
          }))
        )
      } else {
        this.props.fetchFollowedUsersCards(this.props.currentUserId).then( () => (
          this.setState({ 
            followersCards: true, 
            followDropdown: !this.state.followDropdown
          }))
        )
      }
    }
  }

  handleDropdown() {
    this.setState({ followDropdown: !this.state.followDropdown })
  }

  render() {
    // cards is an array, users is an object
    const { 
      cardsByCategory, 
      users, 
      cards, 
      frontpage, 
      currentUserId, 
      collectionId,
      collectionCards,
      openModal,
      likes, 
      createLike,
      deleteLike,
    } = this.props;  

    // Since sometimes cards is an object and othertimes and array
    if ([cards, collectionCards, cardsByCategory].every(list => !Object.values(list)?.length)) {
      return <div className="spinner"></div>; 
    }

    // refactor to make this its own table
    const categories = ["typography", "illustration", "animation", "web design" ]; 

    categories.unshift("all"); 

    const categoryLinks = categories.map( (lnk, i) => (
      <li key={i}>
        <NavLink to={`/${lnk}`}>{lnk}</NavLink>
      </li>
    )); 

    let unmappedCards; 
    if (frontpage) {
      unmappedCards = cardsByCategory; 
    } else if (collectionId) {
      unmappedCards = collectionCards;
    } else {
      unmappedCards = Object.values(cards); 
    }

    let cardIndex; 
    if (frontpage || collectionId) {
      cardIndex =  unmappedCards.map(card => (
        <CardIndexItem 
          key={card.id} 
          card={card} 
          user={users[card.creatorId]} 
          currentUserId={currentUserId}
          openModal={openModal} 
          likes={likes}
          createLike={createLike}
          deleteLike={deleteLike}
        />
      )); 
    } else {
      cardIndex = unmappedCards.map(card => (
        <CardIndexItem 
          key={card.id} 
          card={card} 
          currentUserId={currentUserId}
          openModal={openModal} 
          likes={likes}
          createLike={createLike}
          deleteLike={deleteLike}
        />
      ))
    }

    const icon = <FontAwesomeIcon icon={this.state.followDropdown ? faChevronUp : faChevronDown}/>

    const { followersCards } = this.state; 
    const buttonText = followersCards ? "Following" : "Popular"; 

    const followingFilter = (
      <div className="cards-filter">
        <a onClick={this.handleDropdown}
        >{buttonText} <span> {icon}</span></a>
        <ul 
          className={this.state.followDropdown ? "dropdown-active" : "dropdown-hidden"}
          role="list"
        >
          <li 
            className={ followersCards ? "" : "pink" }
            onClick={this.handleClick("popular")}
            >Popular</li>
          <li 
            className={ followersCards ? "pink" : "" }
            onClick={this.handleClick("following")}
            >Following</li>
        </ul>
      </div>
      ) 


    return (  
      <main className="card-index-container">
        {
          frontpage ? (
            <div>
              { followingFilter }
              <nav>
                <ul role="list">
                  { categoryLinks }
                </ul>
              </nav>
              <div></div>
            </div>
          ) : null
        }
        <ul className="card-index" role="list">
          { cardIndex }
          <li className="card-index-item hidden"></li>
          <li className="card-index-item hidden"></li>
        </ul>
      </main>
    )
  }
}

export default CardIndex; 