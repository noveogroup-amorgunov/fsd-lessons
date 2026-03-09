# backend

## Get started

Create `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Install dependencies:

```bash
pnpm install
```

Run migrations and seeds:

```bash
pnpm prisma:generate
pnpm prisma:migrate
pnpm prisma:seed
```

Run application:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Setup

Create new user:

```bash
curl -X POST "http://localhost:3000/api/register" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "joe",
    "email": "joe@example.com",
    "password": "securepassword123"
  }'
```

Get current user:

```bash
curl -X GET "http://localhost:3000/api/me" \
  -H "Authorization: Bearer XXX"
```

Refresh token:

```bash
curl -X POST "http://localhost:3000/api/auth/refresh" \
  -H "Content-Type: application/json" \
  -d '{
    "refreshToken": "XXX"
  }'
```

Login:

```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "securepassword123"
  }'
```

## Roadmap

- [ ] fix absolute imports
- [ ] integrate jose https://github.com/panva/jose
- [ ] add Wishlist db models
- [ ] order model + order creating endpoint
- [ ] stocks model + endpoint
- [ ] pm2 for process
- [ ] test enviroment
- [ ] migration for avatarUrl in user
- [ ] dockerfile ?
- [ ] swagger docs (like https://www.youtube.com/watch?v=S8kmHtQeflo)
