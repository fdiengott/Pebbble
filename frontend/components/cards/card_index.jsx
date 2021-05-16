import React from 'react'; 
import { NavLink } from 'react-router-dom'; 

import CardIndexItem from './card_index_item'; 
// import { selectCardsByCategory, selectUserByCard } from '../../reducers/selectors';


class CardIndex extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    if (this.props.frontpage) {
      this.props.fetchCardsAndUsers(); 
      this.props.history.push('/all');
    } else {
      // debugger
      this.props.fetchUserCards(this.props.userId); 
    }
  }

  render() {
    // cards is an array, users is an object
    const { 
      cardsByCategory, 
      users, 
      cards, 
      frontpage
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

    return (  
      <main className="card-index-container">
        <nav>
          <ul role="list">
            { frontpage ? categoryLinks : null }
          </ul>
        </nav>
        <ul className="card-index" role="list">
          { cardIndex }
        </ul>
      </main>
    )
  }
}

export default CardIndex; 