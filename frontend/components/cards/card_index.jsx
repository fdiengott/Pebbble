import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'; 
import { NavLink } from 'react-router-dom'; 

import CardIndexItem from './card_index_item'; 

class CardIndex extends React.Component {
  constructor(props) {
    super(props); 

    this.state = { 
      followed: false, 
      followDropdown: false, 
      pageNum: 1, // offset is derived by pageNum
      received: false,
      category: props.category
    }; 

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

    if (frontpage) { // FRONTPAGE
      let { category } = this.state; 
      if (category.length === 0) {
        this.props.history.push('/all');
      }
      category = category.length > 0 ? category : "all"; 

      fetchUserFollows(currentUserId); 
      fetchCardsAndUsers({ 
        category, 
        followed: this.state.followed, 
        userId: this.props.currentUserId, 
       }).then( () => {
        this.setState({ received: true })
      }); 
      
    } else if (collectionId) { // COLLECTION SHOW PAGE
      fetchCollectionCards({ collectionId }).then( () => { 
        this.setState({ received: true })
      })
      
    } else if (likedCardsPage) { // LIKED CARDS TAB
      fetchLikedCards({ userId }).then( () => { 
        this.setState({ received: true })
      })
      
    } else {
      if (userId) { // USER SHOW PAGE
        fetchUserCards({ userId }).then( () => { 
          this.setState({ received: true })
        })

      } else { // CURRENT USER'S PAGE 
        fetchUserCards({ currentUserId }).then( () => { 
          this.setState({ received: true })
        })
      }
    }

    if (currentUserId) {
      fetchUserLikes(currentUserId) 
    }
  }

  handleFilter(type) {
    return () => {
      this.setState({ received: false }); 

      if (type === "popular") {
        this.props.fetchCardsAndUsers({ category: this.state.category }).then( () => (
          this.setState({ 
            followed: false, 
            followDropdown: !this.state.followDropdown,
            pageNum: 1, 
            received: true, 
          })
        )); 
      } else {
        this.props.fetchCardsAndUsers({ 
          userId: this.props.currentUserId, 
          offset: 0,
          category: this.state.category,
          followed: true,
        }).then( () => (
          this.setState({ 
            followed: true, 
            followDropdown: !this.state.followDropdown,
            received: true,
            pageNum: 1
          }))
        ); 
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
      let { category } = this.state; 
      this.setState({ received: false }); 
      
      let offset = (num - 1) * 12; 
      
      if (frontpage) {// FRONTPAGE
        fetchCardsAndUsers({ offset, category }).then( data => {
          this.setState({ received: true, pageNum: num })
        }); 
        
      } else if (collectionId) {// COLLECTION SHOW PAGE
        fetchCollectionCards({ collectionId, offset }).then( () => { 
          this.setState({ received: true, pageNum: num })
        })
        
      } else if (likedCardsPage) {// LIKED CARDS TAB
        fetchLikedCards({ userId, offset }).then( () => { 
          this.setState({ received: true, pageNum: num })
        })
        
      } else {
        if (userId) {// USER SHOW PAGE
          fetchUserCards({ userId, offset }).then( () => { 
            this.setState({ received: true, pageNum: num })
          })

        } else {// CURRENT USER'S PAGE 
          fetchUserCards({ currentUserId, offset }).then( () => { 
            this.setState({ received: true, pageNum: num })
          })
        }
      }
    }
  }

  handleCategory(e) {
    const { followed } = this.state; 
    const category = e.target.innerText; 
    this.setState({ received: false }); 
    
    this.props.fetchCardsAndUsers({ 
      category, 
      followed,
      userId: this.props.currentUserId, 
    }).then( () => { 
        this.setState({ 
          category, 
          received: true, 
          pageNum: 1
        })
    }); 
  }

  render() {
    // cards is an array, users is an object
    const { 
      users, 
      cards, 
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

    const categoryLinks = categories.map( (category, i) => (
      <li key={i}>
        <NavLink to={`/${category}`}>{category}</NavLink>
      </li>
    )); 


    let unmappedCards = collectionId ? collectionCards : Object.values(cards); 

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

    const { followed } = this.state; 
    const buttonText = followed ? "Following" : "Popular"; 

    const followingFilter = currentUserId ? (
      <div className="cards-filter">
        <a onClick={this.handleDropdown}
        >{buttonText} <span> {icon}</span></a>
        <ul 
          className={this.state.followDropdown ? "dropdown-active" : "dropdown-hidden"}
          role="list"
        >
          <li 
            className={ followed ? "" : "pink" }
            onClick={this.handleFilter("popular")}
            >Popular</li>
          <li 
            className={ followed ? "pink" : "" }
            onClick={this.handleFilter("following")}
            >Following</li>
        </ul>
      </div>
    ) : <div className="cards-filter"></div>

    let noCards = (
      <div className="no-cards-container">
        <img src={window.no_collections} alt="no cards illustration"/>
        <h2>No Cards :(</h2>
      </div>
    )

    let pageNums = [];
    for (let i = 1; i <= numPages; i++) pageNums.push(i) 
    pageNums = pageNums.map( n => (
      <li key={n} className={ n === this.state.pageNum ? "active" : ""}>
        <a onClick={this.handlePage(n)}>{n}</a>
      </li>
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
        <nav className="pageNums">
          <ul role="list">
            { pageNums }
          </ul>
        </nav>
      </main>
    )
  }
}

export default CardIndex; 