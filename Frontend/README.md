# Frontend

This folder contains the frontend application for the project.

## Table of Contents

- [Frontend](#frontend)
  - [Technologies](#technologies-1)
  - [Folder Structure](#folder-structure)
  - [Setup](#setup-1)
  - [Running the Frontend](#running-the-frontend)
- [Contributing](#contributing)

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
## Folder Structure

```
/frontend
  ├── /src
      ├── /components    # Reusable React components
      ├── /pages         # Page-level components
      ├── /graphql       # Queries and mutations
      ├── /styles        # Global and component-specific styles
      ├── /utils         # Utility functions
      ├── /types         # Type Definitions
      ├── /contexts      # Context API for global state
      └── /theme         # MUI theme customization

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
