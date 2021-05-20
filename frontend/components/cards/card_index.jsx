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
    if (this.props.frontpage) {
      this.props.fetchUserFollows(this.props.currentUserId); 
      this.props.fetchCardsAndUsers(); 
      this.props.history.push('/all');
    } else if (this.props.collectionId) {
      this.props.fetchCollectionCards(this.props.collectionId); 
    } else {
      this.props.userId ? 
        // if it's a user show page
        this.props.fetchUserCards(this.props.userId) : 
        // if it's the current user's page
        this.props.fetchUserCards(this.props.currentUserId)
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
      collectionId,
      collectionCards
    } = this.props;  

    // will refactor to make this its own table
    const categories = ["typography", "illustration", "animation", "web design" ]; 

    categories.unshift("all"); 

    const categoryLinks = categories.map( (lnk, i) => (
      <li key={i}>
        <NavLink to={`/${lnk}`}>{lnk}</NavLink>
      </li>
    )); 

    let cardIndex; 
    if (frontpage) {
      cardIndex =  cardsByCategory.map(card => (
        <CardIndexItem key={card.id} card={card} user={users[card.creatorId]} />
      )); 
    } else if (collectionId) {
      cardIndex = collectionCards.map(card => (
        <CardIndexItem key={card.id} card={card} />
      ))
    } else {
      cardIndex = cards.map(card => (
        <CardIndexItem key={card.id} card={card}/>
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
        </ul>
      </main>
    )
  }
}

export default CardIndex; 