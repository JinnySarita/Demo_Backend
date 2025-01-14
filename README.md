# REST API Demo Project

## 📃 Framework

This project is built using the following technologies:

- Express.js: A fast, unopinionated, minimalist web framework for Node.js.

- Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.

- TypeScript: A strongly typed programming language that builds on JavaScript.

## 💡 Core Features

- User Notifications: Retrieve notifications for a specific user based on their user ID.

- RESTful API: Adheres to REST principles with clear route definitions and proper HTTP status codes.

- Database Integration: Connects to a MongoDB database to store and retrieve notification data.
## 🔧 How to Initialize
### Prerequisites

1. Node.js: Ensure you have Node.js installed.

2. MongoDB: A running instance of MongoDB is required.

3. Environment Variables: Create a .env file with the following content:
```
DATABASE_URL=<your_mongo_db_connection_string>
PORT=5002
```
### Installation

1. Clone the repository:

```git clone <repository_url>```

2. Navigate to the project directory:

```cd <project_directory>```

3.Install dependencies:

```npm install```

## 🗁 Project Structure
```
├── src
│   ├── controllers
│   │   └── notificationController.ts
│   ├── models
│   │   └── notification.ts
│   ├── repositories
│   │   └── notificationRepository.ts
│   ├── routes
│   │   └── notifications.ts
│   ├── services
│   │   └── notificationService.ts
│   └── index.ts
├── .env
├── package.json
└── tsconfig.json
```
### Explanation

- controllers: Contains the logic to handle incoming requests and send responses.

- models: Defines the MongoDB schemas and interfaces.

- repositories: Handles direct interactions with the MongoDB database.

- routes: Defines the API endpoints and their corresponding controllers.

- services: Contains business logic and serves as a bridge between controllers and repositories.

## 🚀 How to Run

1. Ensure MongoDB is running.
2. Start the server:
```npm run dev```
3. The server will start on the specified port (default is 5002).
4. Access the API endpoint:

```GET /notifications/user/:userId```

Replace `:userId` with the actual user ID to retrieve notifications for that user.

