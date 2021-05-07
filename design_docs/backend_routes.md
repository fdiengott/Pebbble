# Backend Routes

## HTML
- `GET /`  `StaticPagesController#root`
 
## API Endpoints

### `users`
- `GET /api/users/:id` - returns information on a user, a list of their cards, and collections.
- `POST /api/users` - sign up for a new user. Returns user's information.
- `PATCH /api/users/:id` - edits a user. Only when :id is the same as the current user. Returns the new user information. 
- `GET /api/users/search` - Searches for a list of users whose name matches a query string. 

Note: Search is a custom route. This will be implemented only if the bonus endpoint is reached. 

### `session`
- `GET /api/session` - logs in a user. Returns current user information.
- `DELETE /api/session` - logs out a user.

### `cards`
- `GET /api/cards` - returns recent cards or the cards made by users the current user follows.
- `GET /api/cards/:id` - returns info on a single card including some user info on the creator, and whether the current user has liked or saved this card.
- `POST /api/cards` - creates a new card. Returns the new card information.
- `DELETE /api/cards/:id` - deletes a card. 
- `PATCH /api/cards/:id` - edits a specific song. Returns the edited song. 
- `GET /api/cards/search` - returns a list of cards that match either a category or a query string. 

Note: Search is a custom route that is used to search for cards either by type (aka category) or by a search string to match the cards title. This will only be implemented if the bonus phase is reached. 

### `follows`
- `POST /api/users/:user_id/follows` - follow a user.
- `DELETE /api/follows/:id` - unfollow a user.

### `likes`
- `POST /api/users/:card_id/likes` - like a card.
- `DELETE /api/likes/:id` - unlike a card.

### `collections`
- `GET /api/collections/:id` - returns a collection with all of its info along with a list of its cards. 
- `POST /api/collections` - creates a new collection. Returns the collection. 
- `PATCH /api/collections/:id` - edit a collection. Only when the curator_id matches the current user's id.