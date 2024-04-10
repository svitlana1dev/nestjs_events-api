## Description

The Event Scheduling RESTful API is a comprehensive system designed to facilitate event management, user authentication, and attendance tracking in a seamless and efficient manner. This API offers a range of functionalities including: authentication, user management, event management and event attendance.

## How to run project
Project is using npm as package manager, but you can use yarn as well.
##### 1. Install Dependencies:
```bash
$ npm install
```

##### 2. Run Docker Containers for host the MySQL DB and create DB with name example: "nest-events" (for test DB "nest-events-e2e")

```bash
$ docker-compose up
```

##### 3. Create .env.dev files (.env.e2e for test):

```bash
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=example
DB_NAME=current-db-name
DB_DROP_SCHEMA=0
PORT=3000

APP_URL=mywebsite.com
SUPPORT_EMAIL=support@${APP_URL}

AUTH_SECRET=secret123
```

##### 4. Running the app:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

##### 5. Test the app:

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## API Endpoints

| Method | Route | Auth | Body Example | Description |
|---|---|---|---|---|
| POST | /users | - | "username": "username",<br>"password": "password",<br>"retypedPassword": "password",<br>"firstName": "userfirstName",<br>"lastName": "userlastName",<br>"email": "test@test.com" | User register |
| POST | /auth/login | - | "username": "username",<br>"password": "password" | User login |
| GET | /auth/profile | Yes | - | Get current user profile |
| PUT | /events-attendance/:eventId | Yes | "answer": userId | User mark attendance for a specific event with  ID |
| GET | /events-attendance/:eventId | Yes | - | Users attendance status for a specific event with ID |
| GET | /events-attendance | Yes | - | User attendance status for all events |
| POST | /events | Yes | "name": "Event Name",<br>"description": "About Event", <br>"address": "Event Location",<br>"when":"2024-12-31 21:00:00" | Create a new event |
| GET | /events | - | - | Get a list of events |
| DELETE | /events/:eventId | Yes | - | Delete user event with ID |
| GET | /events-organized-by-user/:userId | - | - | List of events organized by the user with ID |
| GET | /events/:eventId | - | - | Get event by ID |
