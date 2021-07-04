import React from 'react'; 
import { Redirect } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import Errors from '../util/errors'; 
import Dropzone from '../util/dropzone'; 


class CardForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      title: this.props.title,
      description: this.props.description,
      animated: this.props.animated,
      category: this.props.category,
      imgFile: this.props.imgFile,
      imgUrl: this.props.imgUrl,
      disabled: this.props.disabled,
      creatorId: this.props.creatorId,
      redirect: this.props.redirect,
      cardId: this.props.cardId,
    }

    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleFile = this.handleFile.bind(this); 
    this.handleDrop = this.handleDrop.bind(this); 
    this.handleFileHelper = this.handleFileHelper.bind(this); 
    this.handleCategory = this.handleCategory.bind(this); 
    this.handleInput = this.handleInput.bind(this); 
    this.checkSubmit = this.checkSubmit.bind(this); 
    this.resetImage = this.resetImage.bind(this); 
  }


  handleSubmit(e) {
    e.preventDefault(); 
    const formData = new FormData(); 
    
    formData.append('card[title]', this.state.title); 
    formData.append('card[description]', this.state.description); 
    formData.append('card[category]', this.state.category); 
    formData.append('card[creator_id]', this.state.creatorId); 
    formData.append('card[animated]', this.state.animated); 

    // if it's an edit card
    if (this.props.submitText === 'Save') {
      formData.append('card[id]', this.state.cardId); 
    }

    
    if (this.state.imgFile) {
      formData.append('card[img]', this.state.imgFile); 
    }

    this.props.processCard(formData).then(
      card => this.setState({ redirect: true, cardId: card.card.id })
    ); 
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value }, this.checkSubmit)
    }
  }

  handleCategory(category) {
    return () => {
      this.setState({ category: category }, this.checkSubmit); 
    }
  }

  handleFile(e) {
    this.handleFileHelper(e.currentTarget.files[0]); 
  }

  handleDrop(e) {
    e.preventDefault(); 
    this.handleFileHelper(e.dataTransfer.files[0]); 
  }

  handleFileHelper(file) {
    const fileReader = new FileReader; 
    fileReader.onloadend = () => {
      this.setState({ imgFile: file, imgUrl: fileReader.result }, this.checkSubmit) 
    }
    
    if (file) {
      fileReader.readAsDataURL(file); 
    }
    
    if (["image/gif", "video/mp4"].includes(file.type)) {
      this.setState({ animated: true }); 
    } else {
      this.setState({ animated: false }); 
    }
  }

  checkSubmit() {
    const { title, category, imgFile } = this.state; 
    if ([title, category, imgFile].every(el => !!el) ) {
      this.setState({ disabled: false })
    }
  }

  resetImage() {
    this.setState({
      imgFile: null, 
      imgUrl: null, 
    })
  }


  render() {
    const { errors, submitText } = this.props;
    const { cardId, redirect, category, imgUrl, animated, disabled } = this.state; 

    if (redirect) {
      return <Redirect to={`/cards/${cardId}`} />
    }

    const categories = ["typography", "illustration", "animation", "web design" ]; 

    const capitalize = sent => (
      sent.split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    )

    const categoryString = category ? capitalize(category): ""; 
    const categoriesInput = (
      <ul className="categories-input-list" role="list">
        {categories.map((cat, i) => <li key={i} onClick={this.handleCategory(cat)}>{capitalize(cat)}</li>)}
      </ul>
    )

    const imgPreview = imgUrl ? (
      animated ? 
      <video src={imgUrl} autoPlay loop muted/> :
      <img src={imgUrl}/> 
     ) : (
      null
     ); 

      const imgInput = imgPreview ? (
        <div className="img-wrapper">
          <div>
            <div>
              <a onClick={this.resetImage}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </a>
            </div>
          </div>
          { imgPreview }
        </div>
      ) : (
        <Dropzone handleFile={this.handleFile} handleDrop={this.handleDrop} />
      )

    return (
      <form onSubmit={this.handleSubmit} className="card-form">
        <main>
          <section className="img-input">
            { imgInput }
          </section>

          <section className="img-details">
            { errors.length ? <Errors errors={errors} /> : null }
            <label htmlFor="title" >Title*
              <input type="text" onChange={this.handleInput("title")} value={this.state.title} aria-required/>
            </label>

            <label htmlFor="description">Description
              <textarea type="text" onChange={this.handleInput("description")} value={this.state.description}
                cols="30" rows="4"/>
            </label>

            <label htmlFor="category" 
            className="category-label">Category*<span>Select options below</span>
              <input value={ categoryString } className="category-input" readOnly/>
            </label>
            <div className="category-input-list-wrapper">
              <label>Category options</label>
              { categoriesInput }
            </div>
          </section>
        </main>

        <footer>
          <a className="cancel-btn" onClick={() => window.history.back()}>Cancel</a>
          <button 
            className={disabled ? "submit-btn" : "submit-btn active"} 
            disabled={disabled}
            >{submitText}</button>
        </footer>
      </form>
    )
  }
}

export default CardForm; 