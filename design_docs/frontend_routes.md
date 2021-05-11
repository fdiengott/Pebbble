# Frontend Routes

## Organization for Frontend Components
- Root 
  - App 
    - `Header`
      - `NavBar`
    - [ Main Component ]
    - `Footer`

The header and footer will render for every path except for `/login`, `/signup`, and `/cards/new` .

## If not logged in: 
- `/login`
  - `LoginForm`
- `/signup`
  - `SignupForm`

## Either
- `/`
  - `SignupHeader` (This will show for not logged on users and is the only structural difference on the home page)
  - `CategoryHeader`
  - `CardsIndex`
    - `CardIndexItem`
- `/cards/:cardId`
  - `CardDetails`
- `/users/:userId`
  - `UserHeader`
  - `ProfileTabs` (may display one of the 3 top nested items below)
    - `CardsIndex`
      - `CardIndexItem`
    - `CollectionsIndex`
      - `CollectionIndexItem`
    - `AboutDetails`
- `/collections/:collectionId`
  - `CollectionsHeader`
  - `CardsIndex`
    - `CardsIndexItem`

## If logged in
- `/account` 
  - `AccountHeader`
  - `/account/likes`
    - `CardsIndex`
      - `CardIndexItem`
  - `/account/collections`
    - `CollectionsIndex`
      - `CoollectionsIndexItem`
  - `/account/about`
    - `Profile`
    - `EditForm`
- `/cards/new`
  - `NewFormHeader`
  - `CardForm`


## Modals
- new collection
- contact creator