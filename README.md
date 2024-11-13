# 📚 Book Keeper 📚

A take-home assignment for a book inventory management application, built as a full-stack web application in Python and Typescript.

Check out the live demo [here](http://TODO)! 👈

## Features

- **CREATE** books, authors and genres
- **FILTER** books based on title, author, genre, isbn and publication date range
- **LIST** books to be displayed in a data table
- **EXPORT** filtered rows to CSV and JSON formats

## Project structure

I implemented both horizontal and vertical slice organization, dividing both the frontend and backend folders into modules that represents a distinct feature - within each module, code is divided by their roles (layers). I find that this provides a good balance between modularity, flexibility and ease of understanding as projects scale.

```sh
.
├── backend
│   └── src
│       ├── apps
│       │   ├── author
│       │   ├── book
│       │   └── genre
│       ├── management
│       │   └── commands
│       └── migrations
└── frontend
    └── src
        ├── app
        ├── assets
        ├── components
        │   └── ui
        ├── core
        │   ├── api
        │   ├── form
        │   └── ui
        ├── lib
        ├── modules
        │   ├── author
        │   ├── book
        │   └── genre
        └── styles
```

### Frontend directories

- `/app`: Next.js App directory whose folder structure represents the app route structure
- `/assets`: contains media files such as fonts and icons
- `/components/ui`: component folder for `shadcn-ui` installed components
- `/core`: core application modules containing code such as `/components`, `/hooks`, `/utils`, `/types`, shared with the feature-based modules and used throughout the application
- `/lib`: for small, project-agnostic utility functions
- `/modules`: feature-based modules mirroring the API endpoints `author`, `book` and `genre`, with their respective `/components`, `/hooks`, `/types` and `/schemas`
- `/styles`: for global CSS styles

### Backend directories

- `/apps`: contains the API endpoint folders `author`, `book` and `genre`, with their respective `models.py`, `serializers.py`, `filters.py`, `urls.py` (routers) and  `views.py` (controllers)
- `/management/commands`: contains custom command definitions to be used by `django-admin`, such as `seed-data`
- `/migrations`: migration files for creating/updating database schema

## Design and stack

I implemented the frontend and backend in different languages primarily for learning and practice purposes - I am much more familiar in TypeScript and JavaScript for full-stack web development than I am in Python (where my experiences have been in data analysis and visualization).

The reasoning for my choices for the libraries used in this project are summarized below.

### Frontend technologies

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/) - Using only SSG to create a Single Page Application to allow myself to test new technologies on the backend
- [Nuqs](https://nuqs.47ng.com/) - Cleaner state management through URL params, useful for filtering
- [Tanstack Query](https://tanstack.com/query/latest) - Ideal for SPAs with client-side fetching and caching to control fetching states and reduce unnecessary requests to the API
- [React Hook Form](https://react-hook-form.com/) - For complex form state management, integration with `zod` for client-side form validation as well as server error integration
- [Zod](https://zod.dev/) - Client-side form validation to validate user input
- [TailwindCSS](https://tailwindcss.com/) - Uniform CSS styling with Tailwind classes to rapidly style components and make them responsive
- [shadcn/ui](https://ui.shadcn.com/) - Simple, clean and modern component library design
- [isbn3](https://github.com/inventaire/isbn3) - ISBN validation and parsing from other formats to allow more flexible user input
- [Lucide React](https://lucide.dev/) - Open-source icon library for logos and improving UI/UX
- [date-fns](https://date-fns.org/) - For formatting user-friendly `Date` strings, and ensuring correct format for database entry

### Backend technologies

- [Django](https://www.djangoproject.com/) - A framework I've been wanting to learn for a while now
- [Django REST framework](https://www.django-rest-framework.org/) - Suitable for building REST APIs on Django to be consumed, allowing decoupling the frontend from Django
- [django-filter](https://django-filter.readthedocs.io/en/stable/) - Quickly build simple and flexible, useful for  1:1 filtering on model fields

### Database

- [Postgresql](https://www.postgresql.org/)

## Setup instructions

### 1. Cloning the repository

```sh
# Clone project into the current directory
git clone https://github.com/xinweny/book-keeper.git
```

### 2. Project setup

A `Makefile` has been provided with commands to help simplify setup. Run the following command to create the required `.env` files from their templates:

```sh
make create-dotenv-files
```

This project can be set up in 2 ways - using Docker Compose or manual setup. Please fill up the corresponding `.env` files created depending on setup choice:

- Docker Compose: `./.env`
- Manual Setup: `./backend/.env` and `./frontend/.env`

#### Option 1: Docker Compose

Ensure your system has [Docker](https://docs.docker.com/engine/install/) with [Docker Compose](https://docs.docker.com/compose/install/) installed, and that the Docker daemon is running.

##### Building and running the containers

```sh
docker compose up
```

##### Applying database migrations and seeding data

```sh
# Start a new shell within the backend container
docker compose exec backend sh
## Enter the following commands
~ poetry run python manage.py migrate # Apply migrations
~ poetry run python manage.py seeddata # Optional: seed database with mock data
```

#### Option 2: Manual Setup

This project uses the [`poetry`](https://python-poetry.org/docs/) and [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) dependency management tools for its Python and Node.js projects. Please ensure that they are installed.

##### Installing dependencies

```sh
make init-frontend && make init-backend
```

#### Running the applications

```sh
make dev-frontend
make dev-backend
```

### 3. Accessing the applications

- **Client:** http://localhost:3000
- **API:** http://localhost:8000/api

## Commentary

### Challenges

This small project was an excellent opportunity for me to pick up and practice some new technologies, such as Django and Docker, which had me re-familiarizing myself with the Python language (and a completely new web framework), as well as learning about containerization.

### Future considerations and improvements

- Features such as pagination can be considered as the dataset grows
- Increasing data flexibility - e.g. books usually have more than one genre and can have many authors, so a many-to-many relationship with a join table can be considered
- Fully fledging out CRUD operations for books, authors and genres
- Better UI for loading states and error handling
- Test files!
- Although Django's ORM is very comprehensive, it would be good in the future to get practice writing raw SQL
