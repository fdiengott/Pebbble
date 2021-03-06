import React from 'react'; 
import Errors from '../util/errors';
import { CSSTransition } from 'react-transition-group'; 

import CollectionModalListItem from './collection_modal_list_item'; 


class CollectionModal extends React.Component {
  constructor(props) {
    super(props); 

    this.state = { 
      title: "", 
      curator_id: this.props.currentUserId, 
      // collectionIds: new Set(),
    }

    this.handleCollectionSubmit = this.handleCollectionSubmit.bind(this); 
    this.handleCollectionInput = this.handleCollectionInput.bind(this); 

    this.handleCollectionsCardSubmit = this.handleCollectionsCardSubmit.bind(this); 
    this.handleCollectionCardInput = this.handleCollectionCardInput.bind(this); 

    this.closeModal = this.closeModal.bind(this); 
    this.switchToPageOne = this.switchToPageOne.bind(this); 
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      if (!this.props.active) {
        this.setState({ page: this.props.haveCollections ? 2 : 1 }); 
      } else {
        this.props.fetchUserCollections(this.props.currentUserId)
          .then(
            (res) => this.setState({ page: !!Object.keys(res.data.collections).length ? 2 : 1 })
          ).then( () => {
            this.props.fetchUserCollectionsCard(this.props.currentUserId); 
          })

        let newSet = new Set(this.props.activeCollections); 
        newSet.add(''); 
        this.setState({ collectionIds: newSet })
      }
    }
  }


  handleCollectionInput(type) {
    return (e) => {
      e.preventDefault(); 
      this.setState({ [type]: e.currentTarget.value }); 
    }
  }

  handleCollectionCardInput(e) {
    const { collectionIds } = this.state; 
    const collId = Number(e.target.parentElement.dataset.collectionId); 

    // set.add returns the set, set.delete returns a boolean
    if (collectionIds.has(collId)) {
      const cIds = collectionIds; 
      cIds.delete(collId); 

      this.setState({ collectionIds: cIds }); 
    } else {
      this.setState({ collectionIds: collectionIds.add(collId) }); 
    }
  }


  handleCollectionSubmit(e) {
    e.preventDefault(); 

    this.props.createCollection(this.state).then(
      () => {this.setState({ page: 2 })}
    ); 
  }

  handleCollectionsCardSubmit(e) {
    e.preventDefault(); 

    const collections_cards = {
      collection_ids: Array.from(this.state.collectionIds), 
      card_id: this.props.cardId, 
    }

    this.props.createCollectionsCard(collections_cards).then(() => this.closeModal())
  }

  closeModal() {
    this.setState({ title: "" })
    this.props.closeModal(); 
    document.body.style.overflow = 'unset';
  }

  switchToPageOne() {
    this.setState({ page: 1 }); 
  }


  render() {
    const { active, collections } = this.props; 
    if (!active) return null; 

    if (!this.state.collectionIds) return null; 

    const collectionsItems = Object.values(collections).map(collection => (
      <CollectionModalListItem 
        key={collection.id} 
        collection={collection} 
        collectionIds={this.state.collectionIds} 
      />
    )); 

    const modal = this.state.page === 1 ? (
      // page 1: create a new collection
      <div className="modal-form-container" onClick={e => e.stopPropagation()}  key={1}>
        <form onSubmit={this.handleCollectionSubmit}>
          <div>
            <a className="cancel-button-x" onClick={this.closeModal}>&#215;</a>
            <h1>Create a new Collection</h1>
            <Errors errors={this.props.errors} />
            <label htmlFor="title">Title
              <input type="text" onChange={this.handleCollectionInput("title")} value={this.state.title} required id="title"/>
            </label>
          </div>

          <div className="form-buttons">
            <button className="pink-button">Create Collection</button>
            <a className="cancel-button gray-button" onClick={this.closeModal}>Cancel</a>
          </div>
        </form>
      </div>
    ) : (
      // page 2: add cards to a collection
      <div className="modal-form-container" onClick={e => e.stopPropagation()}  key={1}>
        <form onSubmit={this.handleCollectionsCardSubmit}>
          <div>
            <a className="cancel-button-x" onClick={this.closeModal}>&#215;</a>
            <h1>Add this Card to a collection</h1>
            <ul role="list" onClick={this.handleCollectionCardInput}>
              { collectionsItems }
            </ul>
          </div>
          <div className="form-buttons">
            <button className="pink-button">Done</button>
            <a 
              className="create-collection-btn" 
              onClick={this.switchToPageOne}
            >Create New Collection</a>
          </div>
        </form>
      </div>
    )



    return (
      <CSSTransition
        in={!!active}
        classNames="collection-modal"
        timeout={250}
        appear
        >
        <div className="collection-modal-container">
          <div className="modal-background" onClick={this.closeModal}>
            { modal }
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default CollectionModal; 