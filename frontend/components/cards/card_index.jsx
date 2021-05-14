import React from 'react'; 
import { NavLink } from 'react-router-dom'; 

import CardIndexItem from './card_index_item'; 
import { selectCardsByCategory, userByCard } from '../../reducers/selectors';


class CardIndex extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.fetchCards(); 
  }

  render() {
    const { cards } = props;  
    const categories = [ "typography", "illustration", "animation", "web design" ]; 

    const categoryLinks = categories.map( (lnk, i) => (
      <li key={i}>
        <NavLink to={`/${lnk}`}>{lnk}</NavLink>
      </li>
    )); 
      
    // HOW DO I CONNECT THE USER? 
    // const user = userByCard(state)

    return (
      <main>
        <nav>
          <ul>
            { categoryLinks }
          </ul>
        </nav>
        <ul>
          { cards.map(card => <CardIndexItem key={card.id} card={card} /* user={} */ />) }
        </ul>
      </main>
    )
  }
}

export default CardIndex; 