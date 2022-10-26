/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

module.exports = {
  url: process.env.DB_URL,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }

  },
  logging: false
  // define: {
  //   "timestamps": false
  // }
}
