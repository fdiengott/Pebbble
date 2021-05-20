import React from 'react'; 

import CollectionIndexItem from './collection_index_item'; 

class CollectionIndex extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.fetchUserCollections(this.props.userId); 
  }

  render () {
    const {
      // currentUserId,
      collections,
      cards,
    } = this.props; 
    
    const collectionsArr = Object.values(collections); 
    const cardsArr = Object.values(cards); 

    return (
      <ul className="collections-index-list" role="list">
        {
          collectionsArr.map( collection => (
            <CollectionIndexItem 
              key={collection.id} 
              collection={collection} 
              cards={cardsArr} 
            />
          ))
        }
      </ul>
    )
  }
}; 

export default CollectionIndex; 
