import React from 'react'; 


class CollectionModal extends React.Component {
  constructor(props) {
    super(props); 

    this.state = { 
      page: this.props.haveCollections ? 2 : 1,
      active: true, 
      name: "", 
      description: "", 
    }

    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleInput = this.handleInput.bind(this); 
  }


  handleInput(type) {
    return (e) => {
      e.preventDefault(); 

      this.setState({ [type]: e.currentTarget.value }); 
    }
  }

  handleSubmit(e) {
    e.preventDefault(); 

    this.props.createCollection(this.state).then(
      () => this.setState({ page: 2 })
    ); 
  }



  render() {
    const { active } = this.state; 


    const modal = this.state.page === 1 ? (
      // page 1: create a new collection
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Create a new Collection</h1>
          <label htmlFor="name">Name
            <input type="text" onChange={this.handleInput("name")} value={this.state.name} required id="name"/>
          </label>
          <label htmlFor="description">Description (optional)
            <textarea type="text" onChange={this.handleInput("description")} value={this.state.description} rows="6" id="description"/>
          </label>

          <div className="form-buttons">
            <button className="pink-button">Create Collection</button>
            <a className="cancel-button gray-button">Cancel</a>
          </div>
        </form>
      </div>
    ) : (
      // page 2: add cards to a collection
      <div>this is modal page 2</div>
    )



    return (

      <div className={"collection-modal-container " + 
        active ? "active" : null
      }>
        { modal }
        <div className="modal-background"></div>
      </div>
    )
  }
}