## Backend

This folder contains the backend server for the application.

## Table of Contents

- [Backend](#backend)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [API Documentation](#api-documentation)
  - [Environment Variables](#environment-variables)
  - [Running the Backend](#running-the-backend)

### Technologies

- **Node.js** - JavaScript runtime for the backend.
- **Express** - Web framework for handling HTTP requests.
- **GraphQL** - API query language for flexible and efficient data retrieval.
- **MongoDB** - NoSQL database for data storage.
- **Apollo Server** - A GraphQL server implementation.
- **Mongoose** - MongoDB object modeling tool.

### Setup

1. Clone the repository and install dependencies:

   ```bash
   git clone <your-repository-url>
   cd <your-project-directory>
   npm install
   ```

2. Set up environment variables:

   - Create a `.env` file based on the `.env.example` file.
   - Add the necessary variables (e.g., `MONGO_URI` for MongoDB connection URL).

3. Install dependencies:
   ```bash
   npm install
   ```

### API Documentation

- **GET /api/graphql**: Access the GraphQL API endpoint. Use tools like GraphiQL or Apollo Studio to test your queries.

  Example query:

  ```graphql
  query {
    users {
      id
      name
      email
    }
  }
  ```

- **POST [Login] /api/graphql** : Send GraphQL queries and mutations.
  mutation {
  login(username: "your_username", password: "your_password") {
  token
  user {
  id
  username
  }
  }
  }

### Environment Variables

Here are the environment variables needed to run the backend:

- `MONGO_URI`: MongoDB connection string.
- `PORT`: The port the server will run on (default: `4000`).
- `JWT_SECRET`: Secret key for signing JWT tokens.
- `NODE_ENV`: Environment mode (e.g., `development`, `production`).

### Running the Backend

To start the backend server, run:

```bash
npm run dev
```
