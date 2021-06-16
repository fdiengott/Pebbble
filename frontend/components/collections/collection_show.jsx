import React from 'react'; 
import { Link, Redirect } from 'react-router-dom'; 

import CardIndexContainer from '../cards/card_index_container';
import Avatar from '../user/avatar';


class CollectionShow extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { deleted: false };
    
    this.handleDelete = this.handleDelete.bind(this); 
  }

  componentDidMount() {
    this.props.fetchCollection(this.props.collectionId).then(
      (res) => this.props.fetchUser(res.collection.curatorId)
    ); 
  }

  handleDelete(e) {
    e.preventDefault(); 

    let confirmation = window.confirm("Are you sure you want to delete this collection?"); 

    if (confirmation) {
      this.props.deleteCollection(this.props.collectionId).then(
        this.setState({ deleted: true })
      ).then(
        alert("Collection deleted successfully")
      )
    }

  }
  
  render() {
    const { collection, curator, isCurrentUsers } = this.props;

    if (this.state.deleted) {
      return <Redirect to="/account/collections" />
    }
    if (!collection || !curator) return null; 
    
    return (
      <div className="collection-show-container">
      <header className="collection-show-header">
        <h1>{collection.title}</h1>
        <p><span>{collection.numCards} Card(s)</span>&#183;<span
          >{collection.numCreators} Creative(s)</span></p>
        <div>
          <div>
            <Link to={`/users/${curator.id}/cards`}>
              <Avatar user={curator}/>
              <h3>{curator.name}</h3>
            </Link>
          </div>
          {
            isCurrentUsers ? (
              <button 
                className="gray-button" 
                onClick={this.handleDelete}
              >Delete Collection</button>
            ) : null
          }
        </div>
        </header>
        <CardIndexContainer />
      </div>
    )
  }
}; 

export default CollectionShow; 