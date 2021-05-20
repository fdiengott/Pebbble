import React from 'react'; 
import { selectCardsByCollectionId } from '../../reducers/selectors'; 

const CollectionIndexItem = ({ collection, cards }) => {

  // renderedCards = selectCardsByCollectionId(cards, collection.id); 

  return (
    <li key={collection.id}>
      {"Title: " + collection.title}
      {/* {"Card 1: " + } */}
    </li>
  )
}; 


export default CollectionIndexItem; 