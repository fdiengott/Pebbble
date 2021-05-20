import React from 'react'; 
import { selectCardsByCollectionId } from '../../reducers/selectors'; 

const CollectionIndexItem = ({ collection, cards }) => {

  const renderedCards = selectCardsByCollectionId(cards, collection.id); 
  debugger

  return (
    <li key={collection.id}>
      {"Title: " + collection.title}
      <img src={renderedCards[0].img} alt={renderedCards[0].title}/>
      <img src={renderedCards[1].img} alt={renderedCards[1].title}/>
      <img src={renderedCards[2].img} alt={renderedCards[2].title}/>
      <img src={renderedCards[3].img} alt={renderedCards[3].title}/>
    </li>
  )
}; 


export default CollectionIndexItem; 