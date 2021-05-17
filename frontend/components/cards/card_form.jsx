import React from 'react'; 
import { Redirect } from 'react-router';

import Errors from '../util/errors'; 
import Dropzone from '../util/dropzone'; 

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
      this.setState({ [type]: e.target.value }, this.checkSubmit)
      // setTimeout(this.checkSubmit, 0)
    }
  }

  handleCategory(category) {
    return () => {
      this.setState({ category: category }, this.checkSubmit); 
      // setTimeout(this.checkSubmit, 0)
    }
  }

  handleFile(e) {
    this.setState({ imgFile: e.currentTarget.files[0] }, this.checkSubmit) 
    // window.setTimeout(this.checkSubmit, 0)
  }

  checkSubmit() {
    const { title, category, imgFile } = this.state; 
    if ([title, category, imgFile].every(el => !!el) ) {
      this.setState({ disabled: false })
    }
  }

  render() {
    // debugger  
    const { errors } = this.props;
    const { cardId, redirect, category } = this.state; 

    if (redirect) {
      return <Redirect to={`/cards/${cardId}`} />
    }

    const categories = ["typography", "illustration", "animation", "web design" ]; 

    const categoryString = category ? category.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" "): null; 
    const categoriesInput = (
      <ul className="categories-input-list">
        {categories.map((cat, i) => <li key={i} onClick={this.handleCategory(cat)}>{cat}</li>)}
      </ul>
    )


    return (
      <form onSubmit={this.handleSubmit} className="card-form">
        <main>
          <section className="img-input">
            
            <input type="file" name="img" onChange={this.handleFile} 
              accept="image/jpeg, image/png, image/webp, image/gif, video/mp4"/>
          </section>

          <section className="img-details">
            <Errors errors={errors} />
            <label htmlFor="title" >Title*
              <input type="text" onChange={this.handleInput("title")} value={this.state.title} aria-required/>
            </label>

            <label htmlFor="description">Description
              <textarea type="text" onChange={this.handleInput("description")} value={this.state.description}
                cols="30" rows="10"/>
            </label>

            <label htmlFor="category" >Category*
              <input value={ categoryString } className="category-input"/>
            </label>
            <div className="category-input-list-wrapper">
              <u>Category options</u>
              { categoriesInput }
            </div>
          </section>
        </main>

        <footer>
          <a className="cancel-btn" onClick={() => window.history.back()}>Cancel</a>
          <button className="submit-btn" disabled={this.state.disabled}>Publish</button>
        </footer>
      </form>
    )
  }
}

export default CardForm; 