/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/no-var-requires */
const Sequelize = require('sequelize')
const config: any = require('./database')

const db = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
  logging: false
})

module.exports = db
