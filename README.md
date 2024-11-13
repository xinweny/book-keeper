# Book Keeper 📚

A take-home assignment to build a full-stack web application for book inventory management.

Check out the live demo [here](http://TODO)! 👈

## Features
- **Create** books, authors and genres
- **Filter** books based on title, author, genre, isbn and publication date range
- **List** display of books in a data table
- **Export** filtered rows to CSV and JSON formats

## Technologies

## Schema

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

Ensure your system has [Docker](https://docs.docker.com/engine/install/) with [Docker Compose](https://docs.docker.com/compose/install/) installed.

##### Building and running the containers

```sh
docker compose up
```

##### Applying database migrations and seeding data

```sh
# Start a new shell within the backend container
docker compose exec backend sh
## Enter the following commands
~ poetry run python manage.py makemigrations && poetry run python manage.py migrate # Create (pending) migrations and apply
~ poetry run python manage.py seeddata # Optional: seed database with mock data
```

#### Option 2: Manual Setup

This project uses the [`poetry`](https://python-poetry.org/docs/) and [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) dependency management tools for its Python and Node.js projects. Please ensure that they are installed.

##### Configuration

### 3. Accessing the application

- **Client:** http://localhost:3000
- **API:** http://localhost:8000/api

## Commentary

### Challenges

This small project was a very good opportunity for me to pick up and practice some new technologies, such as Django and Docker, which had me re-familiarizing myself with the Python language, as well as learning about containerization.

### Future considerations

- Features such as pagination can be considered as the dataset grows
- Increasing data flexibility - e.g. books usually have more than one genre and can have many authors, so a many-to-many relationship with a join table can be considered
- Fully fledging out CRUD operations for books, authors and genres
- Use CI/CD such as GitHub Actions to automate testing, deployments and improve collaborative workflow
