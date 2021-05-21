# Pebbble

### A haven for designers and design enthusiasts looking to share their work or find inspiration.



![alt-text](https://github.com/fdiengott/Pebbble/app/asset/images/splash-page.png "Pebbble Splash page")


[Live Site!](https://pebbble.herokuapp.com/)


## Technologies
Pebbble has a React/Redux frontend and a Rails backend. It heavily employs the use of AWS's S3 cloud storage technology to host all of the site's images and videos. 

## Showcase

### Creating a card
After deciding not to use any external libraries to make the card's drap-and-drop upload feature, it was not obvious where to begin. 

![alt text](https://github.com/fdiengott/Pebbble/app/asset/images/card_upload_page.png "Card Upload Page")

I started with simple clicking and styling of the file input. Because when a user clicks on an input's label they are essentially clicking on the input, I was able to make the actually input 0.1px by 0.1px, and transparent and then styled the file input's label. I made sure the dropzone's dragOver, dragEnter, and dragLeave didn't cause the browser to change as it normally would and had an onDrop which would submit the photo in the same was as onClick. 

The rest of the form is stored by the state and only upon the required fields being filled will the Publish button become active. 

```
return (
  <div className="drop-zone-container">
    <label className="drop-zone-text" htmlFor="filebtn"
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={handleDrop}         {/* <-- this was passed in with props from the parent component which handles submission  */}
    >
      <FontAwesomeIcon icon={faCloudUploadAlt} className="icon"/>
      <h1>Drag and drop an image</h1>
      <h3>or <span 
        className="pink-text"
      >browse</span> to choose a file</h3>
      <p>(1600x1200 or larger recommended, up to 10MB each)</p>
    </label>
    <input type="file" 
      id="filebtn"
      className="drop-zone-btn" 
      onInput={ handleFile }    {/* <-- this was also passed in with props from the parent component */}
      />
  </div>
)
```

### Styling
In order to handle the large amount of detailed styling my site needed, I elected to use Sass. I heavily employed the use of mixins, constants, equations, extends and imports. Because of the flexibility and brevity that sass allows I was able to style my entire dropzone component in only 40 lines of code. 

```
.drop-zone-container {
  width: 100%;
  height: 100%;
  position: relative;
  @include flex(); 

  .drop-zone-btn {
    opacity: 0;
    position: absolute; 
    width: 0.1px; 
    height: 0.1px; 
    overflow: hidden; 
  }
  
  .drop-zone-text {
    @include flex($flex-direction: column); 
    width: 100%;
    height: 100%;

    border: 3px dashed $light-gray; 
    border-radius: $border-radius;
    transition: border 250ms;
    cursor: pointer;

    .icon {
      font-size: 120px;
      transition: color 250ms; 
    }
    
    &:hover {
      border: 3px dashed $bright-pink; 
      .icon {
        color: $bright-pink; 
      }
    }
  }
}
```

### Backend notes
I elected to take the strategy of using many specific controllers, in exchange for making non RESTful api endpoints. I felt this made the endpoints more semantic and fit properly into the addage of fat models, skinny controllers. 

```
# to get all of the cards created by one user
get '/users/:creator_id/cards', to: 'user_cards#index'

resources :follows, only: [:index, :create, :destroy]

# to get all of the cards of the users the current user follows
get 'follows/:follower_id/cards', to: 'followed_cards#index'

# to get all of the followers of a user
get '/users/:creator_id/followers', to: 'user_followers#index'

# to get all of the collections of a user
get '/users/:curator_id/collections', to: 'user_collections#index'

# to get all of the users a user is following
get '/users/:follower_id/followedUsers', to: 'followed_users#index'

# to get the follows for a specific follower
get '/users/:follower_id/follows', to: 'user_follows#index'

resources :collections, only: [:show, :create, :update, :destroy]
resources :collections_cards, only: [:create, :destroy]

get '/collections/:collection_id/cards', to: 'collection_cards#index'
```

This also meant that I could rely upon my models to do the heavy lifting of the computational work for aggregation and filtering so that it would free up the front end to move faster and process other visual things. 