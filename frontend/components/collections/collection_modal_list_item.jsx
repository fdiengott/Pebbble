import React from 'react'; 


const CollectionModalListItem = ({ collection }) => {

  return (
    <li key={collection.id}>
      <h3>{collection.title}</h3>
      <p>{collection.numCards} Cards</p>
    </li>
  )
}; 

export default CollectionModalListItem; 