import React from 'react'; 

import CollectionIndexItem from './collection_index_item'; 
import NoCollections from './no_collections'; 

class CollectionIndex extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { noCollections: false }
  }

  componentDidMount() {
    this.props.fetchUserCollections(this.props.userId)
      .then( null, () => this.setState({ noCollections: true })); 
  }

  render () {
    const {
      // currentUserId,
      collections,
      cards,
    } = this.props; 
    
    const collectionsArr = Object.values(collections); 
    const cardsArr = Object.values(cards); 

    if (this.state.noCollections) {
      return <NoCollections />
    }

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
