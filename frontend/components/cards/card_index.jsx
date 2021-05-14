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
    this.props.history.push('/all');
  }

  render() {
    // cards is an array, users is an object
    const { cardsByCategory, users } = this.props;  

    // will refactor to make this its own table
    const categories = ["typography", "illustration", "animation", "web design" ]; 

    categories.unshift("all"); 

    const categoryLinks = categories.map( (lnk, i) => (
      <li key={i}>
        <NavLink to={`/${lnk}`}>{lnk}</NavLink>
      </li>
    )); 

    return (  
      <main className="card-index-container">
        <nav>
          <ul role="list">
            { categoryLinks }
          </ul>
        </nav>
        <ul className="card-index" role="list">
          { cardsByCategory.map(card => (
            <CardIndexItem key={card.id} card={card} user={users[card.creatorId]} />
          ))}
        </ul>
      </main>
    )
  }
}

export default CardIndex; 