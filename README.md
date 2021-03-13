# WeCare

A GraphQL, React.js, Apollo, Neo4j stack app with node.

## Frontend

### Routes

- `/` the home page containing the feed and post creating funtionality
- `/login` login using JWT
- `/register` sign up using JWT
- `/profile` **(Auth Only)** view your profile
- `/u/:userId` view other people's profiles.


## Backend

The beackend is built with `neo4j-graphql-js` so the resolvers are written automatically, except Login and Signup resolvers.

### Schema

- User

```graphql
type User {
  _id: ID
  name: String
  avatarUrl: String
  email: String
  password: String
  liked: [Post]
  created: [Post]
  following: [User]
  followers: [User]
  followingCount: Int
  followerCount: Int
  isFollowing: Boolean
}
```

- Post

```graphql
type Post {
  _id: ID
  date: _Neo4jDateTime
  content: String
  gallery: [String]
  likes: Int
  Author: User
  isLiked: Boolean
  Comments: [Comment]
  commentCount: Int
}
```

- Comment

```graphql
type Comment {
  content: String
  date: _Neo4jDate
  Author: User
}
```

### Queries

- `feed(first: Int): [Post]`
- `Profile: User`
- `Search(q: String, limit: Int, offset: Int): [User]`
- `Login(email: String, password: String): String`

### Mutations

- `NewPost(content: String, gallery: [String]): Post`
- `RemovePost(postId: Int): User`
- `Follow(userId: Int): User`
- `Unfollow(userId: Int): User`
- `Like(postId: Int): Post`
- `Unlike(postId: Int): Post`
- `SetAvatarUrl(url: String): User`
- `Comment(content: String, postId: Int): Comment`
- `RemoveComment(commentId: Int): Post`
- `Signup(email: String, password: String, avatarUrl: String, name: String): String`
