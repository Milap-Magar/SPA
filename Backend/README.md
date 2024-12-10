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

<!-- Login API Documentation -->

### Login Api Documentation

- **POST [LOGIN] /api/graphql**
```graphql
mutation login($email: String!, $password: String!, $role: String!) {
  login(email: $email, password: $password, role: $role) {
    user {
      id
      name
      email 
    }
  }
}
  ``` 

### Register Api Documentation

- **POST [REGISTER] /api/graphql**
```graphql
  mutation register(
  $email: String!, 
  $password: String!, 
  $name: String!, 
  $role: String!, 
  $address: String!, 
  $phone: String!
) { 
  register(
    email: $email, 
    password: $password, 
    name: $name, 
    role: $role, 
    address: $address, 
    phone: $phone
  ) {
    id
    name
    email
    role
  }
}

```


### FETCH user Data Documentation
<!-- Fetch user data -->
- **GET [USER DATA] /api/graphql** : Get User details.

## API QUREIS AND MUTATIONS FOR CREATING & OTHER STUFFS
<!-- GRAPHQL API's -->
- **POST [CREATE-TASK] /api/graphql** : Send GraphQL queries and mutations for adding the TASKS
  mutation {
  createTask(
    title: "New Task"
    description: "This is a new task"
    dueDate: "2024-12-15"
    status: "Pending"
  ) {
    id
    title
    description
    dueDate
    status
  }
}

- **PUT [UPDATE-TASK] /api/graphql** : Send GraphQL queries and mutations for updating the TASKS
  mutation {
  updateTask(
    id: "1"
    title: "Updated Task Title"
    description: "Updated task description"
    dueDate: "2024-12-20"
    status: "In Progress"
  ) {
    id
    title
    description
    dueDate
    status
  }
}

- **DELETE [DELETE-TASK] /api/graphql** : Send GraphQL queries and mutations for deleting the TASKS.
mutation {
  deleteTask(id: "1") 
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
