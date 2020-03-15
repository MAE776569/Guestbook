# Guestbook

Geustbook is **MERN stack** application that allow users write, and reply to messages.

## Features

- Create an account
- Log in to the application
- Send, update, and delete messages
- Reply to other users

## How to install

Navigate to the project root directory and run the commands in the terminal

- `npm run build` *to build the front-end files*

- `npm run database` *to start the database server*

- `npm start` *to start the server*

## Authentication

**Session** authentication was used to allow the users to login and create accounts.

### How authentication works

Each time a user creates an account or log in a new session is created and session id is sent to the client.

With each request the session is validated using the session id.

If the session is valid the request is handled, and if the session is not valid the user is requested to provide a valid session id or create another session.

## The Models

The application consists of four models:

### 1. User Model

| Field    | Description                        |
| -------- | ---------------------------------- |
| name     | The name of the user               |
| username | Unique username for authentication |
| password | The user's password                |

### 2. Session Model

| Field     | Description                            |
| --------- | -------------------------------------- |
| id        | Session id                             |
| user      | Id of the user who created the session |
| expiresAt | Expiration date of the session         |

### 3. Message Model

| Field | Description      |
| ----- | ---------------- |
| text  | The message body |

### 4. Conversation Model

| Field    | Description     |
| -------- | --------------- |
| sender   | The user id who sent the message   |
| receiver | The user id who received the message |
| message  | The message id  |

## The API

The front end consumes the API to be able to communicate with the back-end.

All the API endpoints **start with `/api` followed by the endpoints mentioned in the below table**.

| Endpoint      | Method | Body                                 | Description                                                   |
| ------------- | ------ | ------------------------------------ | ------------------------------------------------------------- |
| `/login`        | **POST**   | username, password                   | login user and create a session                               |
| `/signup`       | **POST**   | name, username, password, c-password | create a user account and a session                           |
| `/logout`       | **POST**   | no parameters                        | logout the user and destroy the session                       |
| `/me`           | **GET**    | no parameters                        | get the logged in user information                            |
| `/users`        | **GET**    | no parameters                        | get all users                                                 |
| `/conversation` | **POST**   | sender, receiver, text               | create a new conversation                                     |
| `/conversation` | **GET**    | sender, receiver                     | get all the conversations between the sender and the receiver |
| `/messages/:id` | **PUT**    | text                                 | update the message text                                       |
| `/messages/:id` | **DELETE** | no parameters                        | delete the message                                            |
