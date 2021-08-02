# Sequelize Migration-level Hooks

## Goal

Test to see whether a migration-level `onDelete: 'cascade'` hook would work with
the static `destroy()` method on a Model class.

## Getting the app started

1. Clone this repository
2. `cd` into the repository
3. `npm install` to install dependencies
4. Create a `.env` file using the `.env.example` as a guide
5. Create a database user in your local Postgres database based off the
   information you provided in the `.env` file, make sure that your new user has
   `createdb` privileges
6. Run `npx dotenv sequelize db:create`
7. Run `npx dotenv sequelize db:migrate`
8. Run `npx dotenv sequelize db:seed:all`
9. Run `npm start` to start the application

## Usage

You can hit the routes with `fetch` calls from your browser's console or using
something like [Postman]. The available routes are listed below, see the [API
Documentation] for more details on each route.

## API Routes

Use the [Postman JSON] to simplify the testing of these routes.

### GET /api/users

List all users with their associated posts and comments

### POST /api/users

Create a new user

### DELETE /api/users/:userId

Delete the user with that `userId`. Will also delete the associated posts and
comments associated to this user, and the comments associated to the posts that
are associated to this user.

### GET /api/posts

List all posts

### POST /api/posts

Create a post. It will randomly assign a user to the post during time of
creation.

### DELETE /api/posts/:postId

Delete the post with that `postId`. Will also delete the comments associated to
this post.

### GET /api/comments

List all comments

### POST /api/comments

Create a comment. It will randomly assign a user and post to the comment during
time of creation.

[Postman]: https://www.postman.com/
[API Documentation]: ./API_DOCUMENTATION.md
[Postman JSON]: ./migration_hooks.postman_collection.json
