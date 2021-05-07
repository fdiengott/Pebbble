```js
{
  entities: {
    users: {
      // this is the current user
      8: {
        id: 8,
        username: "Flapjack Syrupstein",
        email: "fsyrupstein@arizonastate.edu",
        bio: "Waffle connoisseur and crepe enthusiast. Don't even make me look at a pancake. I won't accept it.",
        websiteUrl: "http://www.notmypancakes.com/",
        avatarUrl: "somepath/wafflecone.png",
        joined: 'Aug 2010' // in model layer the datetime will be parsed into a more readable format
      },
      // this is the state of all other users as we navigate the site 
      63: {
        id: 63,
        username: "Ash Ketchum",
        avatarUrl: "somepath/pikapika.png",
      },
      // this is the state for a user whose profile the current user has navigated to
      30: {
        id: 30,
        username: "Young HyperLink",
        bio: "I'm a young elvish boy, endlessly drawing photos of my dear princess",
        websiteUrl: "http://www.triforcedesigns.com",
        avatarUrl: "somepath/zeldaportrait96.png",
        joined: 'Aug 2010',
        followed: true, // boolean; model layer finds if current user is following this creator to save on frontend iteration
        followers: 20, // number of users following this creator
        following: 6, // number of users this creator follows
      },
    },
    cards: {
      // this is when we have a show page for a specific card
      5465: {
        id: 5465,
        title: "my deer heart",
        creatorId: 35,
        mediaUrl: "someactiverecord/pathname.gif",
        animated: true, 
        description: "new logo design for an outdoors company. Critique's welcome!",
        liked: false, // boolean indicating if the current user has liked this card, uses backend filter instead of frontend
        type: "animation", // category used to sort cards
        saved: true, // boolean indicating if the current user has saved this card to a collection, to avoid frontend iteration
      }, 
      // this is general info that is needed for every card as we navigate the site
      322: {
        id: 322,
        title: "sweaty",
        creatorId: 30,
        mediaUrl: "somepath/someimage.png",
        animated: true, 
        liked: true, 
        numLikes: 10, // model layer counts the number of likes a card has, regardless of user
        type: "illustration",
        collectionId: null,
      }, 
    }, 
    follows: {
      96: {
        id: 96,
        followerId: 63,
        creatorId: 30,
      },
    },
    collections: {
      // this is when we are on another user's profile page and browsing their collections. 
      5: {
        id: 5,
        numCards: 5,
        title: "logos",
        curatorId: 24,
      },
      // this is when we are looking at a specific collection. 
      18: {
        id: 18,
        title: "fruit foliage",
        curatorId: 85,
      },
    },
  },
  ui: {
    cardModal: 16, // this is the id num for the card that should have a modal display. Null when no modal is displayed. 
    loading: false
  },
  session: {
    currentUserId: 8,
  },
  errors: {
    login: ["We couldn’t find an account matching the username and password you entered. Please check your username and password and try again."],
    signup: ["Username has already been taken"], 
    newCard: ["Your card title cannot be blank"], 
    newCollection: ["Name can't be blank"], 
  }
}
```