import React from 'react'; 
import CardIndexContainer from '../cards/card_index_container';
import Avatar from '../user/avatar';


class CollectionShow extends React.Component {
  // constructor(props) {
  //   super(props); 
  // }

  componentDidMount() {
    this.props.fetchCollection(this.props.collectionId).then(
      (res) => this.props.fetchUser(res.collection.curatorId)
    ); 
  }
  
  render() {
    const { collection, curator } = this.props;

    if (!collection || !curator) return null; 
    
    return (
      <>
      <header className="collection-show-header">
        <h1>{collection.title}</h1>
        <p><span>{collection.numCards} Cards</span>&#183;<span
          >{collection.numCreators} Creatives</span></p>
        <div>
          <Avatar user={curator}/>
          <h3>{curator.name}</h3>
        </div>
        </header>
        <CardIndexContainer />
      </>
    )
  }
}; 

export default CollectionShow; 