## Setup

**Note:** For this exercise, we have provided an `.env` file with the database connection string. Normally, you would not commit this file to version control. We are doing it here for simplicity and given that we are using a local SQLite database.

## Database

This project should be used with the `movies.db` database in `data/` folder. It is the same database that we used in the previous exercise. You can download a fresh database [here](https://cdn.cs50.net/2022/fall/psets/7/movies.zip) or from [CS50](https://cs50.harvard.edu/x/2023/psets/7/movies/).

## Migrations

We can run migrations with the following command:

```bash
npm run migrate:latest
```

## Running the server

In development mode:

```bash
npm run dev
```

In production mode:

```bash
npm run start
```

## Updating types

If you make changes to the database schema, you will need to update the types. You can do this by running the following command:

```bash
npm run generate-types
```

## Requirements

For instance, under "create new screenings for watching a movie", you might specify what data needs to be input (e.g., movie id, screening timestamp(s), total tickets allocation), what the output should be, and any constraints (e.g., screening time must be in the future, total ticket allocation must be a positive integer). Commit your requirements document before writing any code.

Users should be able to:

1. Get a list of movies with their id, title and year by providing a list of their IDs (e.g., /movies?id=133093,816692 should return 2 movies with these IDs, if they exist)

- at least one param required

2. Create a screenings table

- columns: id, timestamp, tickets_left, movie_id (fk)

3. Create users table

- columns: id, username, role (user/admin)

4. Create users-to-screenings (user_id <-> movie_id), many-to-many table

5. Users can get a list of screenings available for booking.
   Screenings should include session information (timestamp, number of tickets, number of tickets left) and movies: (title and year).

- optionally search by params
- only return if tickets_left > 0
- if no params provided - return 10 soonest screenings (and 10 next until there's no more rows)
- from there, option to book one of the results...

6. Book ticket for

- enter username (does exist?)
- how many tickets? (print max)

7. Users can get a list of bookings (tickets) they have booked

8. Administrators should be able to:
   [screening] create new viewing screenings for watching a movie that has a timestamp and a provided allocation of tickets

- "admin options" or so from the main menu: enter username -> does exist & is admin? -> create

optional requirement: delete viewing screenings while they are empty
optional requirement: change a screening's ticket allocation as long as it is not lower than the number of reserved tickets

User and administrator inputs should be validated.
Database schema changes must be done using migrations. You can adapt the provided database schema to match your needs by adding more tables or changing the existing ones.
Application code should have unit and integration tests. Shoot for 80% - 95% test coverage.
Commits should follow the Conventional Commits standard. Commit early, commit often.
