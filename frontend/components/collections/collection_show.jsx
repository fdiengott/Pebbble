import React from 'react'; 
import { Link } from 'react-router-dom'; 

import CardIndexContainer from '../cards/card_index_container';
import Avatar from '../user/avatar';


class CollectionShow extends React.Component {

  componentDidMount() {
    this.props.fetchCollection(this.props.collectionId).then(
      (res) => this.props.fetchUser(res.collection.curatorId)
    ); 
  }
  
  render() {
    const { collection, curator } = this.props;

    if (!collection || !curator) return null; 
    
    return (
      <div className="collection-show-container">
      <header className="collection-show-header">
        <h1>{collection.title}</h1>
        <p><span>{collection.numCards} Cards</span>&#183;<span
          >{collection.numCreators} Creatives</span></p>
        <div>
          <Link to={`/users/${curator.id}`}>
            <Avatar user={curator}/>
            <h3>{curator.name}</h3>
          </Link>
        </div>
        </header>
        <CardIndexContainer />
      </div>
    )
  }
}; 

export default CollectionShow; 