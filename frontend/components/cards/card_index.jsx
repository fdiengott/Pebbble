import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'; 
import { NavLink } from 'react-router-dom'; 

import CardIndexItem from './card_index_item'; 

class CardIndex extends React.Component {
  constructor(props) {
    super(props); 

    this.state = { followersCards: false, clicked: false }; 

    this.handleClick = this.handleClick.bind(this); 
  }

  componentDidMount() {
    if (this.props.frontpage) {
      this.props.fetchFollows(); 
      this.props.fetchCardsAndUsers(); 
      this.props.history.push('/all');
    } else {
      this.props.userId ? 
        // if it's a user show page
        this.props.fetchUserCards(this.props.userId) : 
        // if it's the current user's page
        this.props.fetchUserCards(this.props.currentUserId)
    }
  }

  handleClick() {
    if (this.state.followersCards) {
      this.props.fetchCardsAndUsers().then(
        this.setState({ followersCards: false })
      )
    } else {
      this.props.fetchFollowedUsersCards(this.props.currentUserId).then(
        this.setState({ followersCards: true }) 
      )
    }
  }

  render() {
    // cards is an array, users is an object
    const { 
      cardsByCategory, 
      users, 
      cards, 
      frontpage, 

    } = this.props;  

    // will refactor to make this its own table
    const categories = ["typography", "illustration", "animation", "web design" ]; 

    categories.unshift("all"); 

    const categoryLinks = categories.map( (lnk, i) => (
      <li key={i}>
        <NavLink to={`/${lnk}`}>{lnk}</NavLink>
      </li>
    )); 

    const cardIndex = frontpage ? (
      cardsByCategory.map(card => (
        <CardIndexItem key={card.id} card={card} user={users[card.creatorId]} />
      ))
      ) : (
      cards.map(card => (
        <CardIndexItem key={card.id} card={card}/>
      ))
    )

    const icon = <FontAwesomeIcon icon={this.state.clicked ? faChevronUp : faChevronDown}/>

    const followingFilter = this.state.followersCards ? (
      <a onClick={this.handleClick}
      >Following <span>{icon}</span></a>
      ) : (
      <a onClick={this.handleClick}
      >Popular <span>{icon}</span></a>
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