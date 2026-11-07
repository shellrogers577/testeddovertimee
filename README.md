# Tested Over Time storefront

A responsive, faith-inspired clothing storefront built with React, TypeScript, Vite, Tailwind CSS, and a Node/Express API backed by PostgreSQL and Prisma.

## Requirements

- Node.js 20+
- PostgreSQL 14+

## Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create a local environment file from the example and set your PostgreSQL connection string and a private JWT secret:

   ```sh
   cp .env.example .env
   ```

   On Windows PowerShell, use `Copy-Item .env.example .env`.

3. Create the database, generate the Prisma client, apply the initial schema, and load the store catalog:

   ```sh
   npm run db:generate
   npm run db:migrate -- --name init
   npm run db:seed
   ```

   `ADMIN_EMAIL` and `ADMIN_PASSWORD` are optional; set both in `.env` before seeding to create an administrator account. Use a unique, strong password.

4. Start Vite and the Express API together:

   ```sh
   npm run dev
   ```

   Vite runs at `http://localhost:5173` and proxies `/api` requests to the API at `http://localhost:3001`.

## Available scripts

- `npm run dev` — start the storefront and API for local development.
- `npm run build` — type-check and build the frontend.
- `npm run preview` — preview the production frontend build.
- `npm run db:generate` — generate the Prisma client.
- `npm run db:migrate -- --name init` — create/apply a development migration.
- `npm run db:seed` — seed categories, featured products, and an optional admin account.
- `npm run start:server` — start the Express API.

## API

- `GET /api/health`
- `GET /api/v1/items?page=1&limit=12&search=faith&sort=featured&category=adult-shirts`
- `POST /api/v1/items` — administrator bearer token required.
- `PUT /api/v1/items/:id` — administrator bearer token required.
- `DELETE /api/v1/items/:id` — administrator bearer token required.
- `POST /api/v1/auth/signup`
- `POST /api/v1/auth/login`
- `POST /api/v1/contact`

The product API supports `newest`, `price-asc`, `price-desc`, and `featured` sorting. Catalog changes are limited to administrators; signup creates a customer account. Passwords are hashed with bcrypt and access tokens are signed using `JWT_SECRET`.

When the account API cannot be reached during local development, the account form supports a browser-only fallback: passwords are salted and hashed with PBKDF2 before being saved in this browser's local storage. Browser-only accounts cannot sync to other devices or be used by the API. To enable server accounts, configure `DATABASE_URL` and `JWT_SECRET`, run the Prisma migration, and start the API as described above.

Checkout currently sends a prefilled order request to the store's WhatsApp number, with SMS as an alternative. Shipping and payment are confirmed directly with the customer; card payments are not processed by this app.

## Contact links

The floating buttons and footer connect to WhatsApp (`https://wa.me/13032574241`) and SMS (`sms:+13032574241`) for **+1 (303) 257-4241**.
