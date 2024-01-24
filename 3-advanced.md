# Creating the database from model

We will now create the database from the model (2-model.png).

```sql

USE `module1` ;

CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `post`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `content` TEXT(65535) NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
   );


CREATE TABLE comment (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT(65535) NULL,
  `post_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
    FOREIGN KEY (`post_id`)
    REFERENCES `post`(`id`),
    FOREIGN KEY (`user_id`)
    REFERENCES `user`(`id`));
```

## Inserting users

To insert data into the database we use the `INSERT` statement.

```sql
INSERT INTO `user`(`name`, `email`) VALUES ('Ludvig','ludvig@test.no')

INSERT INTO `user`(`name`, `email`) VALUES ('Eivind','eivind@test.no')

```

## Creating posts

```sql
INSERT INTO `post`(`title`, `content`, `user_id`) VALUES ('test','første test','3')
```

This insert statement will fail because we have a foreign key constraint on the `users_id` column. This means that the value we insert into the `users_id` column must exist in the `id` column of the `user` table. Since we only have created two users with the id's 1 and 2, we can't insert the value 3 into the `users_id` column.

```sql
INSERT INTO `post`(`title`, `content`, `user_id`) VALUES ('test','første test','1')
```

This will work, since the user "Ludvig" has the id 1.

Create a few more users, and posts.

## Join selects.

Now we want to select all the posts a user have created, and change the user id to the users name.

```sql
SELECT `post`.`title`, `post`.`content`, `user`.`name`
FROM `post`
JOIN `user` ON `post`.`user_id` = `user`.`id`
```

## Extra

Try to create a query getting all the comments for a post, and the names of the users who commented.
