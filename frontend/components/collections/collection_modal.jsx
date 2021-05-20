import React from 'react'; 

import CollectionModalListItem from './collection_modal_list_item'; 


class CollectionModal extends React.Component {
  constructor(props) {
    super(props); 

    this.state = { 
      page: this.props.haveCollections ? 2 : 1,
      title: "", 
      curator_id: this.props.currentUserId, 
    }

    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleInput = this.handleInput.bind(this); 
    this.closeModal = this.closeModal.bind(this); 
    this.switchToPageOne = this.switchToPageOne.bind(this); 
  }

  componentDidUpdate() {
    debugger
    this.props.fetchUserCollections(this.props.currentUserId); 
  }


  handleInput(type) {
    return (e) => {
      e.preventDefault(); 
      this.setState({ [type]: e.currentTarget.value }); 
    }
  }

  handleCollectionSubmit(e) {
    e.preventDefault(); 

    this.props.createCollection(this.state).then(
      () => {this.setState({ page: 2 })}
    ); 
  }

  closeModal() {
    this.props.closeModal(); 
    document.body.style.overflow = 'unset';
  }

  switchToPageOne() {
    this.setState({ page: 1 }); 
  }


  render() {
    const { active, collections } = this.props; 
    debugger
    if (!active) return null; 

    const modal = this.state.page === 1 ? (
      // page 1: create a new collection
      <div className="modal-form-container" onClick={e => e.stopPropagation()}>
        <form onSubmit={this.handleCollectionSubmit}>
          <h1>Create a new Collection</h1>

          <label htmlFor="title">Title
            <input type="text" onChange={this.handleInput("title")} value={this.state.title} required id="title"/>
          </label>

          <div className="form-buttons">
            <button className="pink-button">Create Collection</button>
            <a className="cancel-button gray-button" onClick={this.closeModal}>Cancel</a>
          </div>
        </form>
      </div>
    ) : (
      // page 2: add cards to a collection
      <div className="modal-form-container" onClick={e => e.stopPropagation()}>
        <form onSubmit={this.handleCollectionCardSubmit}>
          <h1>Add this Card to a collection</h1>
          <ul>
            {
              Object.values(collections).map(collection => (
                <CollectionModalListItem collection={collection}/>
              ))
            }
          </ul>
          <div className="form-buttons">
            <button className="pink-button">Done</button>
            <a className="cancel-button gray-button" onClick={this.closeModal}>Cancel</a>
          </div>
        </form>
      </div>
    )



    return (
      <div className="collection-modal-container">
        <div className="modal-background" onClick={this.closeModal}>
          { modal }

        </div>
      </div>
    )
  }
}

export default CollectionModal; 