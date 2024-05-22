# Inventory Service of E-Commerce Platform
This is the inventory service of the E-Commerce Platform. It is responsible for managing the products in the inventory.

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

#### Product Inventory Routes

- [x] Create product - `POST /products-inventory/create-product-inventory` [ Authenticated Users]
- [x] Get All Products - `GET /products-inventory/all-products-inventory` [ Authenticated Users]
- [x] Get Product by ID - `GET /products-inventory/product-inventory/:id` [ Authenticated Users]
- [x] Update Product - `PATCH /products-inventory/update-product-inventory/:id` [ Authenticated Users]

#### Product Quantity Routes

- [x] Create product quantity - `POST /products-quantity/create-product-quantity` [ Authenticated Users]
- [x] Get All Products - `GET /products-quantity/all-products-quantity` [ Authenticated Users]

---