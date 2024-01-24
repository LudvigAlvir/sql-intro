# Relational databases

## Beginning

- Open up XAMPP and start Apache and MySQL
- Go to localhost in you web browser
- Click on phpMyAdmin
- Click SQL.

## Creating a database

Create a database called `module1`

  <!-- prettier-ignore -->

```js
  CREATE DATABASE module1;
```

You have now written your first SQL statement!

## Creating a table

Select the database you just created and click on the SQL tab. Or write `USE module1;` in the SQL tab.

Then create a table called `post` with the collums `id`, `title` and `body`

  <!-- prettier-ignore -->

```sql
  CREATE TABLE post (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT(65535) NOT NULL
  );
```

Lets create our first post.

<!-- prettier-ignore -->
```sql
INSERT INTO post (title, body) VALUES ('My first post', 'This is my first post');
```

To get the data back from the database we use the `SELECT` statement.

<!-- prettier-ignore -->
```sql
SELECT * FROM post;
```

Now add some more data to the table.

<!-- prettier-ignore -->
```sql
INSERT INTO post (title, body) VALUES ('My second post', 'This is my second post');
INSERT INTO post (title, body) VALUES ('My third post', 'This is my third post');
INSERT INTO post (title, body) VALUES ('My fourth post', 'This is my fourth post');
```

## Selecting data

To get the data back from the database we use the `SELECT` statement.

<!-- prettier-ignore -->
```sql
SELECT * FROM post
WHERE id = 1;
```

<!-- prettier-ignore -->
```sql
INSERT into post(title, body)
values('see what happens', 'when i create a new one like this');
```

We can now write "searches" to get the data we want.

<!-- prettier-ignore -->
```sql
SELECT * FROM `post` 
WHERE title like '%se%'
```

% sign is a wildcard, so it will return all posts that have the letters se in the title. No matter what is before or after those letters.
Try a new query with the % sign in different places.
