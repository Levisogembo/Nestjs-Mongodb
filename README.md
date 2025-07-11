<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

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

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally or MongoDB Atlas)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd nestjs-mongodb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   - Make sure MongoDB is running on your local machine at `mongodb://127.0.0.1:27017`
   - The application will automatically create a database named `nest_tutorial`

4. **Start the development server**
   ```bash
   npm run start:dev
   ```

The application will be available at `http://localhost:3000`

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

## 📝 Usage Examples

### Creating a User
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "john_doe",
    "displayName": "John Doe",
    "avatarUrl": "https://example.com/avatar.jpg"
  }'
```

### Creating a Post
```bash
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Post",
    "content": "This is the content of my first post!"
  }'
```

### Getting All Users
```bash
curl -X GET http://localhost:3000/users
```

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

## 🗄️ Database Schema

### User Schema
- `userName` (string, unique, required) - Unique username
- `displayName` (string, optional) - Display name
- `avatarUrl` (string, optional) - Avatar image URL
- `userSettings` (ObjectId, ref: userSettings) - User settings reference
- `posts` (Array of ObjectIds, ref: posts) - User's posts

### Post Schema
- `title` (string, unique, required) - Post title
- `content` (string, required) - Post content

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [NestJS Documentation](https://docs.nestjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)

## 📞 Support

If you have any questions or need help, please open an issue in the repository.
