# Postgres Database Schema

## `users`
| __column name__   | __datatype__  | __details__                     |
| -----------       | -----------   | ----------------------          |
| id                | integer       | not null, primary key           |
| username          | string        | not null, indexed, unique       |
| name              | string        | not null                        |
| location          | string        | not null                        |
| email             | string        | not null, unique                |
| bio               | text          |                                 |
| website_url       | string        |                                 |
| password_digest   | string        | not null                        |
| session_token     | string        | not null, indexed, unique       |
| created_at        | datetime      | not null                        |
| updated_at        | datetime      | not null                        |

- index on `username, unique: true`
- index on `session_token, unique: true`
- index on `email, unique: true`


## `cards`
| __column name__   | __datatype__  | __details__                     |
| -----------       | -----------   | ----------------------          |
| id                | integer       | not null, primary key           |
| creator_id        | integer       | not null, foreign key, indexed  |
| collection_id     | integer       | foreign key, indexed            |
| title             | string        | not null, unique, scope: user   |
| description       | string        | optional                        |
| animated          | boolean       | inclusion [true, false]         |
| type              | string        | inclusion [typography, illustration, animation]         |
| created_at        | datetime      | not null                        |
| updated_at        | datetime      | not null                        |

- index on `collection_id`
- index on `[creator_id, title], unique: true`
- `creator_id` references `users`
- `collection_id` references `collections`
`creator_id` doesn't need it's own index since it'll already be index for the combination with title. 
`collection_id` is optional, but is still indexed as it's a foreign key. 



## `follows`
| __column name__   | __datatype__  | __details__                     |
| -----------       | -----------   | ----------------------          |
| id                | integer       | not null, primary key           |
| follower_id       | integer       | not null, foreign key, indexed  |
| creator_id        | integer       | not null, foreign key, indexed  |
| created_at        | datetime      | not null                        |
| updated_at        | datetime      | not null                        |

- index on `[:follower_id, :creator_id] unique, true`
- index on creator_id
- `follower_id` references `users`
- `creator_id` references `users`
- joins table between `users` and `users`

## `collections`
| __column name__   | __datatype__  | __details__                     |
| -----------       | -----------   | ----------------------          |
| id                | integer       | not null, primary key           |
| curator_id        | integer       | not null, foreign key, indexed  |
| title             | string        | not null, unique                |
| created_at        | datetime      | not null                        |
| updated_at        | datetime      | not null                        |
- index on `curator_id`
- `curator_id` references `users`


## `likes`
| __column name__   | __datatype__  | __details__                     |
| -----------       | -----------   | ----------------------          |
| id                | integer       | not null, primary key           |
| liker_id          | integer       | not null, indexed, foreign key  |
| likeable_id       | integer       | not null, indexed, foreign key  |
| likeable_type     | string        | not null, indexed               |
| created_at        | datetime      | not null                        |
| updated_at        | datetime      | not null                        |
- index on `[:likeable_type, :likeable_id, :liker_id], unique true`
- index on `liker_id`
- `likeable_id` references cards or collections
- `likeable_type` will be either "cards" or "collections" 
Likes are a polymorphic association. 

