import React from 'react'
import { Link, Redirect } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { selectFollowId } from '../../reducers/selectors'; 


import Avatar from '../user/avatar'; 
import Errors from '../util/errors';


class CardDetails extends React.Component {
  constructor(props) {
    super(props); 

    this.state = { 
      deleted: false, 
      followingUser: this.props.followingUser,
      likeId: this.getLikeId(),
    }

    this.handleDelete = this.handleDelete.bind(this); 
    this.toggleFollow = this.toggleFollow.bind(this); 
    this.openCollectionModal = this.openCollectionModal.bind(this); 
    this.handleLike = this.handleLike.bind(this); 
  }

  componentDidMount() {
    this.props.fetchCard(this.props.match.params.cardId)
      .then( card => this.props.fetchUser(card.card.creatorId))
      .then( () => this.props.fetchUserFollows(this.props.currentUserId))
      .then( () => {
        // only fetch likes on refresh, when there are no likes in state
        if (!this.props.likes.length) {
          this.props.fetchUserLikes(this.props.currentUserId).then(
            () => this.setState({ likeId: this.getLikeId() })
          )
        }
      } )

  }

  getLikeId() {
    return this.props.likes?.find(like => like.cardId === this.props.card.id)?.id
  }

  handleDelete() {
    const response = confirm("Are you sure you want to delete this screenshot?")
    if (response) {
      this.props.deleteCard(this.props.card.id).then(
        alert("Card deleted successfully")
      ).then(this.setState({ deleted: true })); 
    }
  }

  toggleFollow() {
    const {
      user,
      followUser,
      unfollowUser,
      currentUserId,
      follows,
      signInError
    } = this.props; 

    if (!currentUserId) {
      signInError(); 
      return; 
    }

    const followed = this.checkFollows(); 

    if (followed) {
      const followId = selectFollowId(follows, currentUserId, user.id)
      
      //unfollow
      unfollowUser(followId).then(
        this.setState({ followed: !this.state.followed })
      )
    } else {
      //follow
      followUser({ follow: { 
        creator_id: user.id, 
        follower_id: currentUserId 
      }}).then(this.setState({ followed: !this.state.followed }))
    }
  }

  checkFollows() {
    return Object.values(this.props.follows)
      .map(follow => follow.creatorId)
      .includes(this.props.user.id)
  }

  handleLike(e) {
    e.preventDefault(); 
    
    const { likeId } = this.state;

    if (likeId) {
      this.props.deleteLike(likeId).then( () => {
        this.setState({ likeId: undefined })
      }); 
    } else {
      this.props.createLike({liker_id: this.props.currentUserId, card_id: this.props.card.id})
        .then( (data) => this.setState({ likeId: data.like.id })
      ); 
    }
  }

  openCollectionModal(e) {
    e.preventDefault(); 
    this.props.openModal(this.props.card.id); 
    document.body.style.overflow = 'hidden';
  }

  render() {
    const { user, card, currentUserId, follows, errors } = this.props; 
    
    if (!user || !card)       return null; 
    if (this.state.deleted)   return <Redirect to={`/users/${currentUserId}/cards`} />
    
    const followed = this.checkFollows(); 
    
    const followButtonText = followed ? "Following" : "Follow"
    const followButton = (
      <a 
      className="follow-button"
      onClick={this.toggleFollow}
      >{followButtonText}</a>
    ) 
      
    const currentUserCard = user.id === currentUserId; 

    // don't display follow or email buttons if it's a user show page
    const userShowButtons = currentUserCard ? null : (
      <>
      <span>&#183;</span>
      { followButton }
      {/* HIRE ME BUTTON
      <span>&#183;</span>
      <div className="email-wrapper">
        <a className="email-button">Hire Me</a>
        <u className="email-popup">Send a message about a work opportunity
          <u className="arrow-down"></u>
        </u>
      </div> */}
      </>
    )

    const { likeId } = this.state; 

    const saveAndLikeButtons = currentUserCard ? null : (
      <aside>
        <button onClick={this.openCollectionModal}>Save</button>
        <button className={likeId ? "icon-pink" : "icon-gray"} onClick={this.handleLike}>
          <span>{<FontAwesomeIcon icon={faHeart} />}
          </span>{likeId ? "" : "Like"}
        </button>
      </aside>
    )

    const creatorLinkRoute = currentUserCard ? `/account/cards` : `/users/${card.creatorId}/cards`; 

    const userShowLink = (comp) => (
      <Link to={creatorLinkRoute}> 
        { comp }
      </Link>
    )

    const avatarLink = userShowLink(<Avatar user={user}/>); 
    
    const image = card.animated ? (
      <video src={card.img} autoPlay loop muted/>
    ) : (
      <img src={card.img} alt={card.title}/>
    )

    const currentUserPage = currentUserId === card.creatorId; 
    const currentUserButtons = currentUserPage ? (
      <div className="card-alter-buttons">
        <Link 
          className="gray-button"
          to={`/cards/${card.id}/edit`}
        >Edit</Link>
        <a 
        className="gray-button"
        onClick={this.handleDelete}
        >Delete</a>
      </div>
    ) : null; 

    

    return (
      <main className="card-details">
        <div className="back-banner" onClick={() => window.history.back()}>
          <span>&times;</span>
        </div>
        <div className="card-details-container">
          <Errors errors={errors} />
          <header>
            <section>
              <div className="image-cropper">
                { avatarLink }
              </div>
              <div className="card-header-text">
                <h2>{card.title}</h2>
                <div className="inline-card-header-text">
                  <div><Link 
                    to={creatorLinkRoute}
                    className="user-link"
                    >{user.name}</Link>
                    { userShowButtons }
                  </div>
                </div>
              </div>
            </section>
            { saveAndLikeButtons }
          </header>
          <div className="image-container">
            { image }
          </div>
          <footer>
            <p>{card.description}</p>
            { currentUserButtons }
            <div className='avatar-container'>
              <hr/>
              { avatarLink }
            </div>
            { userShowLink(<h3>{user.name}</h3> ) }
            {// HIRE ME BUTTON
              // currentUserPage ? null : (
              //   <button className="pink-button"
              //       ><span><FontAwesomeIcon icon={faEnvelope} 
              //       /></span>Hire Me
              //   </button>
              //   )
            }
          </footer>
        </div>
      </main>
    )
  }
}


export default CardDetails; 