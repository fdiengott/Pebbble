import React from 'react'; 


const CollectionModalListItem = (props) => {
  const { collection, collectionIds } = props; 
  const id = collection.id; 
  
  // const cli = "collection-list-item "; 

  return (
    <li key={id} data-collection-id={id} className={collectionIds.has(id) ? `active` : ''}>
      <h3>{collection.title}</h3>
      <p>{collection.numCards} Cards</p>
    </li>
  )
}; 

export default CollectionModalListItem; 