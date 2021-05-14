import React from 'react'; 
import { NavLink } from 'react-router-dom'; 

import CardIndexItemContainer from './card_index_item_container'; 
import CardIndexItem from './card_index_item'; 
import { selectCardsByCategory, selectUserByCard } from '../../reducers/selectors';


class CardIndex extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.fetchCardsAndUsers(); 
  }

  render() {
    // cards is an array, users is an object
    const { cards, users } = this.props;  

    // will refactor to make this its own table
    const categories = [ "typography", "illustration", "animation", "web design" ]; 

    const categoryLinks = categories.map( (lnk, i) => (
      <li key={i}>
        <NavLink to={`/${lnk}`}>{lnk}</NavLink>
      </li>
    )); 

    return (
      <main>
        <nav>
          <ul>
            { categoryLinks }
          </ul>
        </nav>
        <ul className="card-index" role="list">
          { cards.map(card => <CardIndexItem key={card.id} card={card} user={users[card.creatorId]} />) }
        </ul>
      </main>
    )
  }
}

export default CardIndex; 