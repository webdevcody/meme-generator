## Getting Started

1. `npm i`
2. setup env variables (see below)
3. `npm run dev`

## Environment Variables

In order to run this project, you'll need to create a `.env` file based on the `.env.sample` file.

### ImageKit Setup

1. create an imagekit account
2. navigate to https://imagekit.io/dashboard/developer/api-keys
3. copy the necessary keys and put into .env

- NEXT_PUBLIC_PUBLIC_KEY
- NEXT_PUBLIC_URL_ENDPOINT
- PRIVATE_KEY

### Neon Setup

1. create a neon account and setup a neon database
2. copy the connection string and paste into the .env file for DRIZZLE_DATABASE_URL

### Google Auth

By default, this starter only comes with the google provider which you'll need to setup:

1. https://console.cloud.google.com/apis/credentials
2. create a new project
3. setup oauth consent screen
4. create credentials - oauth client id
5. for authorized javascript origins

- http://localhost:3000
- https://your-domain.com

6. Authorized redirect URIs

- http://localhost:3000/api/auth/callback/google
- https://your-domain.com/api/auth/callback/google

7. Set your google id and secret inside of .env

- **AUTH_GOOGLE_ID**
- **AUTH_GOOGLE_SECRET**
