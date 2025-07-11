# NestJS MongoDB Tutorial Project

A robust REST API built with NestJS and MongoDB that demonstrates user management and post creation functionality. This project showcases modern backend development practices with proper validation, error handling, and database relationships.

## 🚀 Features

- **User Management**: Complete CRUD operations for users
- **Post Creation**: Users can create posts linked to their accounts
- **Data Validation**: Input validation using class-validator
- **Error Handling**: Comprehensive error handling with proper HTTP status codes
- **Database Relationships**: One-to-many relationship between users and posts
- **MongoDB Integration**: Seamless integration with MongoDB using Mongoose
- **TypeScript**: Full TypeScript support with proper typing

## 🛠️ Technologies Used

- **Framework**: [NestJS](https://nestjs.com/) - Progressive Node.js framework
- **Database**: [MongoDB](https://www.mongodb.com/) - NoSQL database
- **ORM**: [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- **Validation**: [class-validator](https://github.com/typestack/class-validator) - Decorator-based validation
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- **Testing**: [Jest](https://jestjs.io/) - Testing framework
- **Code Quality**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Code linting and formatting

## 📚 API Endpoints

### Users Module

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/users` | Create a new user |
| `GET` | `/users` | Get all users |
| `GET` | `/users/:id` | Get user by ID |
| `PATCH` | `/users/update/:id` | Update user by ID |
| `DELETE` | `/users/:id` | Delete user by ID |

### Posts Module

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/posts` | Create a new post |
| `GET` | `/posts` | Get all posts |
| `GET` | `/posts/id?id=<post_id>` | Get post by ID |


## 🏗️ Project Structure

```
src/
├── app.module.ts              # Main application module
├── main.ts                    # Application entry point
├── users/                     # Users module
│   ├── Dtos/
│   │   ├── createUser.dto.ts  # User creation DTO
│   │   └── updateUser.dto.ts  # User update DTO
│   ├── users.controller.ts    # Users controller
│   ├── users.module.ts        # Users module definition
│   └── users.service.ts       # Users business logic
├── posts/                     # Posts module
│   ├── Dtos/
│   │   └── createPost.dto.ts  # Post creation DTO
│   ├── posts.controller.ts    # Posts controller
│   ├── posts.module.ts        # Posts module definition
│   └── posts.service.ts       # Posts business logic
└── schemas/                   # MongoDB schemas
    ├── posts.schema.ts        # Posts schema
    ├── user.schema.ts         # User schema
    └── userSettings.schema.ts # User settings schema
```

## 🔧 Available Scripts

- `npm run build` - Build the application
- `npm run start` - Start the application
- `npm run start:dev` - Start the application in development mode with hot reload
- `npm run start:debug` - Start the application in debug mode
- `npm run start:prod` - Start the application in production mode
- `npm run test` - Run unit tests
- `npm run test:watch` - Run unit tests in watch mode
- `npm run test:cov` - Run unit tests with coverage
- `npm run test:e2e` - Run end-to-end tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
