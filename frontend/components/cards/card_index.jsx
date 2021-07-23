import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'; 
import { NavLink } from 'react-router-dom'; 

import CardIndexItem from './card_index_item'; 

class CardIndex extends React.Component {
  constructor(props) {
    super(props); 

    this.state = { 
      followersCards: false, 
      clicked: false,
      followDropdown: false, 
      pageNum: 1, // offset is derived by pageNum
      received: false,
      category: "all"
    }; 

    // this has keys of page nums, any time fetch cards set pageCards[`page-${pageNum}`] = cards
    //      pageCards[`following-page-${pageNum}`] = cards
    //      pageCards[`liked-page-${pageNum}`] = cards
    this.pageCards = {}; 

    this.handleFilter = this.handleFilter.bind(this); 
    this.handleDropdown = this.handleDropdown.bind(this); 
    this.handleCategory = this.handleCategory.bind(this); 
  }

  componentDidMount() {
    const {
      frontpage, 
      fetchUserFollows, 
      fetchCardsAndUsers,
      collectionId,
      fetchCollectionCards,
      likedCardsPage,
      fetchLikedCards,
      userId,
      currentUserId,
      fetchUserCards,
      fetchUserLikes,
    } = this.props; 

    if (frontpage) {
      // FRONTPAGE
      fetchUserFollows(currentUserId); 
      fetchCardsAndUsers().then( data => {
        console.log(data); // set the cards to the correct key situation in memo
        this.setState({ received: true })
      }); 
      this.props.history.push('/all');
      
    } else if (collectionId) {
      // COLLECTION SHOW PAGE
      fetchCollectionCards({ collectionId }).then( () => { // TODO add .then and set cards in memo
        this.setState({ received: true })
      })

    } else if (likedCardsPage) {
      // LIKED CARDS TAB
      fetchLikedCards({ userId }).then( () => { // TODO add .then and set cards in memo
        this.setState({ received: true })
      })

    } else {
      if (userId) {
        // USER SHOW PAGE
        fetchUserCards({ userId }).then( () => { // TODO add .then and set cards in memo
          this.setState({ received: true })
        })
      } else {
        // CURRENT USER'S PAGE 
        fetchUserCards({ currentUserId }).then( () => { // TODO add .then and set cards in memo
          this.setState({ received: true })
        })
      }
    }

    if (currentUserId) {
      fetchUserLikes(currentUserId) // TODO add .then and set cards in memo
    }
  }


  handleFilter(type) {
    return () => {
      // if (this.state.followersCards) {
      if (type === "popular") {
        this.props.fetchCardsAndUsers().then( () => (
          this.setState({ 
            followersCards: false, 
            followDropdown: !this.state.followDropdown
          }))
        )
      } else {
        this.props.fetchFollowedUsersCards({ 
          userId: this.props.currentUserId, 
          offset: this.state.offset,
          category: this.state.category
        }
        ).then( () => (
          this.setState({ 
            followersCards: true, 
            followDropdown: !this.state.followDropdown,
            received: true
          }))
        )
      }
    }
  }

  handleDropdown() {
    this.setState({ followDropdown: !this.state.followDropdown })
  }

  handlePage(num) {
    return () => {
      const {
        frontpage, 
        fetchCardsAndUsers,
        collectionId,
        fetchCollectionCards,
        likedCardsPage,
        fetchLikedCards,
        userId,
        currentUserId,
        fetchUserCards,
      } = this.props; 
      let { pageNum, category } = this.state; 

      this.setState({ received: false, pageNum: num })
      
      // if (direction === "next") {
      //   this.setState({ received: false, pageNum: num })
      // } else {
      //   this.setState({ received: false, pageNum: num })
      // }
      
      // TODO check if memoized
      
      let offset = (num - 1) * 12; 
      
      if (frontpage) {// FRONTPAGE
        fetchCardsAndUsers({ offset, category }).then( data => {
          this.setState({ received: true })
        }); 
        
      } else if (collectionId) {// COLLECTION SHOW PAGE
        fetchCollectionCards({ collectionId, offset }).then( () => { 
          this.setState({ received: true })
        }
        )
        
      } else if (likedCardsPage) {// LIKED CARDS TAB
        fetchLikedCards({ userId, offset }).then( () => { 
          this.setState({ received: true })
        }
        )
        
      } else {
        if (userId) {// USER SHOW PAGE
          fetchUserCards({ userId, offset }).then( () => { 
            this.setState({ received: true })
          }
          )
        } else {// CURRENT USER'S PAGE 
          fetchUserCards({currentUserId, offset }).then( () => { 
            this.setState({ received: true })
          }
          )
        }
      }
    }
  }

  handleCategory(e) {
    const offset = this.state.offset; 
    const category = e.target.innerText; 
    this.props.fetchCardsAndUsers({ offset, category }).then( () => { 
        this.setState({ category, received: true })
    }); 
  }

  render() {
    // cards is an array, users is an object
    const { 
      // cardsByCategory, 
      users, 
      cards, 
      // userCards,
      frontpage, 
      currentUserId, 
      collectionId,
      collectionCards,
      openModal,
      likes, 
      createLike,
      deleteLike,
      numPages
    } = this.props;  

    if (!this.state.received) {
      return <div className="spinner"></div>; 
    }
    
    // refactor to make this its own table
    const categories = ["typography", "illustration", "animation", "web design" ]; 

    categories.unshift("all"); 

    const categoryLinks = categories.map( (lnk, i) => (
      <li key={i}>
        <NavLink to={`/${lnk}`}>{lnk}</NavLink>
      </li>
    )); 


    let unmappedCards; 
    if (collectionId) {
      unmappedCards = collectionCards;
    } else {
      unmappedCards = Object.values(cards); 
    }

    let cardIndex; 
    if (frontpage || collectionId) {
      cardIndex =  unmappedCards.map(card => (
        <CardIndexItem 
          key={card.id} 
          card={card} 
          user={users[card.creatorId]} 
          currentUserId={currentUserId}
          openModal={openModal} 
          likes={likes}
          createLike={createLike}
          deleteLike={deleteLike}
        />
      )); 
    } else {
      cardIndex = unmappedCards.map(card => (
        <CardIndexItem 
          key={card.id} 
          card={card} 
          currentUserId={currentUserId}
          openModal={openModal} 
          likes={likes}
          createLike={createLike}
          deleteLike={deleteLike}
        />
      ))
    }

    const icon = <FontAwesomeIcon icon={this.state.followDropdown ? faChevronUp : faChevronDown}/>

    const { followersCards } = this.state; 
    const buttonText = followersCards ? "Following" : "Popular"; 

    const followingFilter = currentUserId ? (
      <div className="cards-filter">
        <a onClick={this.handleDropdown}
        >{buttonText} <span> {icon}</span></a>
        <ul 
          className={this.state.followDropdown ? "dropdown-active" : "dropdown-hidden"}
          role="list"
        >
          <li 
            className={ followersCards ? "" : "pink" }
            onClick={this.handleFilter("popular")}
            >Popular</li>
          <li 
            className={ followersCards ? "pink" : "" }
            onClick={this.handleFilter("following")}
            >Following</li>
        </ul>
      </div>
    ) : <div className="cards-filter"></div>

    let noCards = (
      <h2>No Cards :(</h2>
    )

    // debugger
    let pageNums = [];
    for (let i = 1; i <= numPages; i++) { pageNums.push(i) }
    pageNums = pageNums.map( n => (
      <li key={n}><a onClick={this.handlePage(n)}>{n}</a></li>
    ))

    return (  
      <main className="card-index-container">
        {
          frontpage ? (
            <div>
              { followingFilter }
              <nav>
                <ul role="list" onClick={this.handleCategory}>
                  { categoryLinks }
                </ul>
              </nav>
              <div></div>
            </div>
          ) : null
        }
        <ul className="card-index" role="list">
          { cardIndex.length !== 0 ? cardIndex : noCards }
          <li className="card-index-item hidden"></li>
          <li className="card-index-item hidden"></li>
        </ul>
        <nav>
          <ul role="list">
            { pageNums }
          </ul>
        </nav>
      </main>
    )
  }
}

export default CardIndex; 