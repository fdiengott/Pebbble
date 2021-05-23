import React from 'react'; 


const CollectionModalListItem = (props) => {
  const { collection } = props; 
  
  return (
    <li key={collection.id}>
      <h3>{collection.title}</h3>
      <p>{collection.numCards} Cards</p>
    </li>
  )
}; 

export default CollectionModalListItem; 