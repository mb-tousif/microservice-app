# Core Service of E-Commerce Platform
This is the core service of the E-Commerce Platform. It is responsible for managing the products and users

---

### Tech Stack

- [x] Express.js
- [x] Typescript
- [x] MongoDB
- [x] Mongoose
- [x] JasonWebToken
- [x] Bcrypt
- [x] Redis
- [x] Docker

---

### Installation and Setup

- Clone the repository
- Run `npm install` to install all dependencies
- Create a `.env` file and add the following environment variables
  - `PORT` - Port number for the server
  - `DATABASE_URL` - MongoDB connection string
  - `APP_NAME` - Name of the application
  - `BCRYPT_SALT_ROUNDS` - Number of salt rounds for Bcrypt
  - `JWT_SECRET` - Secret key for JWT
  - `JWT_EXPIRES_IN` - Expiry time for JWT
  - `REDIS_URL` - Redis connection string
  - `REDIS_EXPIRES_IN` - Expiry time for Redis cache

- Run `npm run dev` to start the server in development mode

### Docker 

- Run `docker-compose up` to start the server in a docker container

---

### API

#### Auth Routes

- [x] Login user - `POST /auth/login`
- [x] Password reset - `POST /auth/reset-password`

#### User Routes

- [x] Create user - `POST /users/create-user`
- [x] Get All Users - `GET /users/get-all-users`

#### Product Routes

- [x] Create product - `POST /products/create-product`
- [x] Get All Products - `GET /products/all-products`
- [x] Get Product by ID - `GET /products/products/product/:id`
- [x] Update Product - `PUT /products/update-product/:id`
- [x] Delete Product - `DELETE /products/delete-product/:id`

---