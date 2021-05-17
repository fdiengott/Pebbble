import React from 'react'; 
import { Redirect } from 'react-router';

import Errors from '../util/errors'; 

class CardForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      title: "", 
      description: "", 
      animated: false, 
      category: "",  
      imgFile: null, 
      disabled: true,
      creatorId: this.props.currentUserId,
      redirect: false,
      cardId: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleFile = this.handleFile.bind(this); 
    this.handleCategory = this.handleCategory.bind(this); 
    this.handleInput = this.handleInput.bind(this); 
    this.checkSubmit = this.checkSubmit.bind(this); 
  }

  handleSubmit(e) {
    e.preventDefault(); 
    const formData = new FormData(); 
    
    formData.append('card[title]', this.state.title); 
    formData.append('card[description]', this.state.description); 
    formData.append('card[category]', this.state.category); 
    formData.append('card[creator_id]', this.state.creatorId); 
    
    if (this.state.imgFile) {
      formData.append('card[img]', this.state.imgFile); 
    }

    this.props.createCard(formData).then(
      card => this.setState({ redirect: true, cardId: card.card.id })
    ); 
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
      setTimeout(this.checkSubmit(), 500)
    }
  }

  handleCategory(category) {
    return () => {
      this.setState({ category: category }); 
      setTimeout(this.checkSubmit(), 500)
    }
  }

  handleFile(e) {
    this.setState({ imgFile: e.currentTarget.files[0] }) 
    window.setTimeout(this.checkSubmit(), 2000)
  }

  checkSubmit() {
    const { title, category, imgFile } = this.state; 
    // debugger
    if ([title, category, imgFile].every(el => !!el) ) {
      this.setState({ disabled: false })
    }
  }

  render() {
    // debugger  
    const { errors } = this.props;
    const { cardId, redirect } = this.state; 

    if (redirect) {
      return <Redirect to={`/cards/${cardId}`} />
    }

    const categories = ["typography", "illustration", "animation", "web design" ]; 

    const categoriesInput = (
      <ul className="categories-input-list">
        {categories.map((cat, i) => <li key={i} onClick={this.handleCategory(cat)}>{cat}</li>)}
      </ul>
    )

    return (
      <form onSubmit={this.handleSubmit}>
        <section className="img-input">
          <input type="file" name="img" onChange={this.handleFile} 
            accept="image/jpeg, image/png, image/webp, image/gif, video/mp4"/>
        </section>
        <section className="img-details">
          <Errors errors={errors} />
          <label htmlFor="title">Title
            <input type="text" onChange={this.handleInput("title")} value={this.state.title}/>
          </label>
          <label htmlFor="description">Description
            <textarea type="text" onChange={this.handleInput("description")} value={this.state.description}
              cols="30" rows="10"/>
          </label>
          <div className="category-input">
            <p>Card Type</p>
            { categoriesInput }
          </div>
        </section>
        <footer>
          <a className="cancel-button" onClick={() => window.history.back()}>Cancel</a>
          <button className="submit-btn" disabled={this.state.disabled}>Submit</button>
        </footer>
      </form>
    )
  }
}

export default CardForm; 