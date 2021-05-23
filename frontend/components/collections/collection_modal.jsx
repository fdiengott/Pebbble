import React from 'react'; 

import CollectionModalListItem from './collection_modal_list_item'; 


class CollectionModal extends React.Component {
  constructor(props) {
    super(props); 

    this.state = { 
      // page: this.props.haveCollections ? 2 : 1,
      title: "", 
      curator_id: this.props.currentUserId, 
      collection_ids: [""],
    }

    this.handleCollectionSubmit = this.handleCollectionSubmit.bind(this); 
    this.handleCollectionInput = this.handleCollectionInput.bind(this); 

    this.handleCollectionCardSubmit = this.handleCollectionCardSubmit.bind(this); 
    this.handleCollectionCardInput = this.handleCollectionCardInput.bind(this); 

    this.closeModal = this.closeModal.bind(this); 
    this.switchToPageOne = this.switchToPageOne.bind(this); 
  }

  componentDidMount() {
    this.props.fetchUserCollections(this.props.currentUserId).then(
      (res) => this.setState({ page: !!Object.keys(res.data.collections).length ? 2 : 1 })
    ); 
  }

  componentDidUpdate() {
    // debugger
    // this will break app if not fixed

    // if (!Object.values(this.props.collections).length) {
    //   this.props.fetchUserCollections(this.props.currentUserId); 
    // }
  }


  handleCollectionInput(type) {
    return (e) => {
      e.preventDefault(); 
      this.setState({ [type]: e.currentTarget.value }); 
    }
  }

  handleCollectionCardInput(e) {
    debugger
    this.setState({ collection_ids: e.target.key })
  }

  

  handleCollectionSubmit(e) {
    e.preventDefault(); 

    this.props.createCollection(this.state).then(
      () => {this.setState({ page: 2 })}
    ); 
  }

  handleCollectionCardSubmit(e) {
    e.preventDefault(); 

    this.props.createCollectionsCard(this.state).then(() => this.closeModal())
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
    if (!active) return null; 

    const collectionsItems = Object.values(collections).map(collection => (
      <CollectionModalListItem key={collection.id} collection={collection}/>
    )); 

    const modal = this.state.page === 1 ? (
      // page 1: create a new collection
      <div className="modal-form-container" onClick={e => e.stopPropagation()}>
        <form onSubmit={this.handleCollectionSubmit}>
          <h1>Create a new Collection</h1>

          <label htmlFor="title">Title
            <input type="text" onChange={this.handleCollectionInput("title")} value={this.state.title} required id="title"/>
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
            { collectionsItems }
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