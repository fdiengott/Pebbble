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
      disabled: true
    }

    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleCategory = this.handleCategory.bind(this); 
  }

  handleSubmit(e) {
    e.preventDefault(); 
    const formData = new FormData(); 
    
    formData.append('card[title]', this.state.title); 
    formData.append('card[description]', this.state.description); 
    formData.append('card[category]', this.state.type); 
    
    if (this.state.imgFile) {
      formData.append('card[img]', this.state.imgFile); 
    }

    this.props.createCard(formData).then(
      card => <Redirect to={`/cards/${card.id}`} />
    ); 
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleCategory(category) {
    return () => {
      this.setState({ category: category }); 
    }
  }

  handleFile(e) {
    this.setState({ imgFile: e.currentTarget.files[0] }) 
  }

  enableSubmit() {
    this.setState({ disabled: false })
  }

  render() {
    const { errors } = this.props;

    const categories = ["typography", "illustration", "animation", "web design" ]; 

    const categoriesInput = (
      <ul className="categories-input-list">
        {categories.map((cat, i) => <li key={i} onClick={this.handleCategory(cat)}>{cat}</li>)}
      </ul>
    )

    const { title, category, imgFile } = this.state; 
    if ([title, category, imgFile].every(el => !!el) ) {
      this.enableSubmit();
    }

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