import React from 'react'; 

import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectFollowId } from '../../reducers/selectors'; 

import Avatar from './avatar'; 
import Errors from '../util/errors';


class UserShowHeader extends React.Component { 
  constructor (props) {
    super(props); 

    this.state = { followed: this.props.followingUser }; 

    this.toggleFollow = this.toggleFollow.bind(this); 
  }

  toggleFollow() {
    const {
      user,
      follows, 
      followUser,
      unfollowUser,
      currentUser,
      signInError,

    } = this.props; 

    if (!currentUser) {
      signInError(); 
      return; 
    }

    if (this.state.followed) {
      const followId = selectFollowId(
        follows, 
        currentUser.id,
        user.id  
      )
      
      //unfollow
      unfollowUser(followId).then(
        this.setState({ followed: !this.state.followed })
      )
    } else {
      //follow
      followUser({ follow: { 
        creator_id: user.id, 
        follower_id: currentUser.id 
      }}).then(this.setState({ followed: !this.state.followed }))
    }
  }

  render () {
    const { user, followingUser, errors } = this.props; 

    const colors = ['purple', 'white', 'dark-blue', 'yellow', 'pink']
    let blockColors = []; 

    while (blockColors.length < 2) {
      let newColor = colors[Math.floor(Math.random() * colors.length)]; 

      if (!blockColors.includes(newColor)) {
        blockColors.push(newColor); 
      }
    }

    const followButton = followingUser ? (
      <a 
        className="white-button"
        onClick={this.toggleFollow}
      ><span
      ><FontAwesomeIcon icon={faCheck}/></span> Following</a>
    ) : (
      <a 
        className="gray-button"
        onClick={this.toggleFollow}
      ><span
      ><FontAwesomeIcon icon={faPlus}/></span> Follow</a>
    )


    return (
      <section className='user-show-container'>
        <div className="details-container">
          <Avatar user={user}/>
          <h1>{user.name}</h1>
          <Errors errors={errors}/>
          <div className="user-buttons">
            { followButton }
            <a className="pink-button">Hire Me</a>
          </div>
        </div>
        <div className="colored-blocks">
          <div className={blockColors[0]}></div>
          <div className={blockColors[1]}></div>
        </div>
      </section>
    )
  }
}

export default UserShowHeader; 