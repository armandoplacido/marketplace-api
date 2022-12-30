const fs = require('fs')
require('dotenv').config()

export const environment = {
  api_port: process.env.API_PORT || 8080,
  jwt_secret: process.env.JWT_SECRET || '',
  token_expiration: process.env.TOKEN_EXPIRATION || '1d',
  refresh_jwt_secret: process.env.REFRESH_JWT_SECRET || '',
  refresh_token_expiration: process.env.REFRESH_TOKEN_EXPIRATION || '7d',
  salt_rounds: process.env.SALT_ROUNDS || 8,
}
