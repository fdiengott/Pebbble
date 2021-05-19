import React from 'react'
import { Link, Redirect } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { selectFollowId } from '../../reducers/selectors'; 


import Avatar from '../user/avatar'; 


class CardDetails extends React.Component {
  constructor(props) {
    super(props); 

    this.state = { 
      deleted: false, 
      followingUser: this.props.followingUser 
    }

    this.handleDelete = this.handleDelete.bind(this); 
    this.toggleFollow = this.toggleFollow.bind(this); 
  }

  componentDidMount() {
    this.props.fetchCard(this.props.match.params.cardId)
      .then( card => this.props.fetchUser(card.card.creatorId))
      .then( () => this.props.fetchUserFollows(this.props.currentUserId))
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
    } = this.props; 

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

  render() {
    const { user, card, currentUserId, follows } = this.props; 
    
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
    
    const avatarLink = (
      <Link to={`/users/${card.creatorId}/cards`}> 
        <Avatar user={user}/>
      </Link>
    ); 
    
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
          <header>
            <section>
              <div className="image-cropper">
                { avatarLink }
              </div>
              <div className="card-header-text">
                <h2>{card.title}</h2>
                <div className="inline-card-header-text">
                  <div><Link 
                    to={`/users/${card.creatorId}/cards`}
                    className="user-link"
                    >{user.name}</Link><span>&#183;</span>
                    { followButton }
                    <span>&#183;</span>
                    <div className="email-wrapper">
                      <a className="email-button">Hire Me</a>
                      <u className="email-popup">Send a message about a work opportunity
                        <u className="arrow-down"></u>
                      </u>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <aside>
              <button>Save</button>
              <button><span>{
                <FontAwesomeIcon icon={faHeart} />
              }</span>Like</button>
            </aside>
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
            <h3>{user.name}</h3>
            {
              currentUserPage ? null : (
                <button className="pink-button"
                    ><span><FontAwesomeIcon icon={faEnvelope} 
                    /></span>Hire Me
                </button>
                )
            }
          </footer>
        </div>
      </main>
    )
  }
}


export default CardDetails; 