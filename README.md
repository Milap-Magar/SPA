# SPA [Single Page Application]

A brief description of your project here. For example: _A web application built with Node.js, GraphQL, and React to manage and interact with data in real-time._

## Login Auth:

- [Email]: "John@info.com"
- [Password]: "John@123"

## Table of Contents

- [Backend](#backend)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [API Documentation](#api-documentation)
  - [Environment Variables](#environment-variables)
  - [Running the Backend](#running-the-backend)
- [Frontend](#frontend)

  - [Technologies](#technologies-1)
  - [Folder Structure](#folder-structure)
  - [Setup](#setup-1)
  - [Running the Frontend](#running-the-frontend)

- [Contributing](#contributing)

---

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
  $email: String!
  $password: String!
  $name: String!
  $role: String!
  $address: String!
  $phone: String!
) {
  register(
    email: $email
    password: $password
    name: $name
    role: $role
    address: $address
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

```graphql
query FetchUser {
  userID {
    id
    name
    email
  }
}
```

## API QUREIS AND MUTATIONS FOR CREATING & OTHER STUFFS

<!-- GRAPHQL API's -->

- **POST [CREATE-TASK] /api/graphql** : Send GraphQL queries and mutations for adding the TASKS

```graphql
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
```

- **PUT [UPDATE-TASK] /api/graphql** : Send GraphQL queries and mutations for updating the TASKS

```graphql
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
```

- **DELETE [DELETE-TASK] /api/graphql** : Send GraphQL queries and mutations for deleting the TASKS.

```graphql
mutation {
  deleteTask(id: "1")
}
```

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

# Frontend

This folder contains the frontend application for the project.

### Technologies

- **React.js** - JavaScript library for building user interfaces.
- **TypeScript** - Enhances code quality with strong & strict typing.
- **Material-UI (MUI)** - Component library for building modern UI.
- **Styled Components** - For custom and dynamic styling.
- **GraphQL** - Query language to interact with the backend API.
- **React Router** - Declarative routing for SPA.
- **Vite** - Fast build tool and development server.

### Setup

1. Clone the repository and navigate to the frontend directory:

   ```bash
   git clone <your-repository-url>
   cd <your-project-directory>
   npm install
   ```

2. Configure environment variables:

Create a .env file based on the .env.example file in the frontend directory.
Add required variables, such as REACT_APP_API_URL for the backend GraphQL endpoint.

3. Install dependencies:
   ```bash
   npm install
   ```

### Folder Structure
```bash
/frontend
├── /src
│ ├── /components # Reusable React components
│ ├── /pages # Page-level components
│ ├── /graphql # Queries and mutations
│ ├── /styles # Global and component-specific styles
│ ├── /utils # Utility functions
│ ├── /types # Type Defs
│ ├── /pages # Page seperation
│ ├── /contexts # Context API for global state
│ └── /theme # MUI theme customization
```
### Environment Variables

Here are the required environment variables for the frontend:

- `REACT_APP_API_URL`: The backend GraphQL API endpoint.
- `REACT_APP_ENV`: Specifies the environment (e.g., development, production).

### Running the Frontend

To start the development server:

```bash
Copy code
npm run dev
```

### Styling

The project uses:

`Material-UI (MUI)` for pre-designed components.
`Styled Components` for dynamic and reusable CSS-in-JS styling.
Customize the MUI theme in the theme.js file located in the /src/theme folder.

### Build for Production

To create an optimized production build:

```bash
Copy code
npm run build
```

Contributing
We welcome contributions! Please follow these steps:

### Fork the repository.

1. Create a new branch for your feature or fix.
2. Commit your changes with clear descriptions.
3. Submit a pull request for review.
