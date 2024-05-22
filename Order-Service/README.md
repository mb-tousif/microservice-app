# Order Service of E-Commerce Platform
This is the order service of the E-Commerce Platform. It is responsible for managing the orders of the users

---

### Tech Stack

- [x] Express.js
- [x] Typescript
- [x] PostgreSQL
- [x] Prisma
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

#### Order Routes

- [x] Create order - `POST /orders/create-order` [ Authenticated Users]
- [x] Get All Orders - `GET /orders/all-orders` [ Authenticated Users]

#### Payment Routes

- [x] Create payment - `POST /payments/create-payment` [ Authenticated Users]
- [x] Get All Payments - `GET /payments/all-payments` [ Authenticated Users]

#### Shipping Routes

- [x] Create shipping - `POST /shippings/create-shipping` [ Authenticated Users]
- [x] Get All Shippings - `GET /shippings/all-shippings` [ Authenticated Users]

---