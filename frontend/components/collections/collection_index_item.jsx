import React from 'react'; 
import Image from '../util/image'; 
import { selectCardsByCollectionId } from '../../reducers/selectors'; 

const CollectionIndexItem = ({ collection, cards }) => {

  const renderedCards = selectCardsByCollectionId(cards, collection.id); 

  return (
    <li key={collection.id}>
      <div className="image-container">
        <Image image={renderedCards[0]} className="main-image"/>
        <ul className="sub-images" role="list">
          <li><Image image={renderedCards[1]}/></li>
          <li><Image image={renderedCards[2]}/></li>
          <li><Image image={renderedCards[3]}/></li>
        </ul>
      </div>
      <footer>
        <h3>{collection.title}</h3>
        <p><span>{collection.numCards} Cards</span>&#183;<span
        >{collection.numCreators} Creatives</span></p>
      </footer>
    </li>
  )
}; 


export default CollectionIndexItem; 